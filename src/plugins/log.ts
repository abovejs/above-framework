/* eslint-disable */
import { Request, Server } from '@hapi/hapi';
import NullLogger from 'abstract-logging';
import Bunyan from 'bunyan';
import BunyanTCP from 'bunyan-logstash-tcp';

const levelTags = {
  trace: 'trace',
  debug: 'debug',
  info: 'info',
  warn: 'warn',
  error: 'error',
};
interface LogstashOptionsContract {
  host: string;
  port: string;
  appName: string;
  bztoken: string;
  env: string;
  versionApi: string;
  ignorePaths?: string[];
  /**
   * Padrão de payload de saída
   */
  logChild?: (request: any) => {};

  /**
   * Padrão de payload de entrada
   */
  logPattern?: (request: any, error: any) => {};
  logEvents?: string[];
}

const Log = {
  name: 'logstash',
  version: '1.0',
  register: (server: Server, options: LogstashOptionsContract) => {
    const { err, req, res } = Bunyan.stdSerializers;
    const serializers = { err, req, res };
    const { host, port, appName, env, bztoken, versionApi, ignorePaths, logChild, logPattern, logEvents } = options;

    const streams: Bunyan.Stream[] = [
      {
        level: 'info',
        stream: process.stdout,
      },
      {
        level: 'debug',
        type: 'raw',
        stream: BunyanTCP.createStream({
          host,
          port,
          appName,
        }),
      },
    ];

    const logger = Bunyan.createLogger({
      name: appName,
      app: appName,
      env,
      serializers,
      streams,
      bztoken,
      type: 'json',
      version: versionApi,
    });

    const tagToLevels: any = { ...levelTags };
    const tags = 'info';

    const validTags =
      Object.keys(tagToLevels).filter(key => Object.values(levelTags).indexOf(tagToLevels[key]) < 0).length === 0;
    if (!validTags || Object.values(levelTags).indexOf(tags) < 0) {
      throw new Error('invalid tag levels');
    }

    const ignoreTable: any = {};
    if (ignorePaths) {
      for (let i = 0; i < ignorePaths.length; i += 1) {
        ignoreTable[ignorePaths[i]] = true;
      }
    }

    server.decorate('server', 'logger', () => logger);
    server.ext('onRequest', async (request: any, h) => {
      if (ignorePaths && ignoreTable[request.url.pathname]) {
        request.logger = NullLogger;
        return h.continue;
      }
      request.logger = logChild ? logger.child(logChild(request)) : logger.child(logChildDefault(request));
      return h.continue;
    });

    server.events.on('log', (event: any) => {
      if (event.error) {
        logger.warn({
          err: event.error,
        });
      } else {
        logEvent(logger, event);
      }
    });

    server.events.on('request', (request: any, event, reciveTags) => {
      if (event.channel === 'internal' && !reciveTags['accept-encoding']) {
        return;
      }

      request.logger =
        request.logger || (logChild ? logger.child(logChild(request)) : logger.child(logChildDefault(request)));

      if (event.error && isEnabledLogEvent(logEvents, 'request-error')) {
        if (logPattern) {
          request.logger.warn(logPattern(request, event.error), 'request-error');
        } else {
          request.logger.warn(logPatternDefault(request, event.error), 'request-error');
        }
      } else if (event.channel === 'app') {
        logEvent(request.logger, event);
      }
    });

    // log when a request completes
    tryAddEvent(server, options, 'on', 'response', (request: any) => {
      if (logPattern) {
        request.logger.info(logPattern(request, null), 'request completed');
      } else {
        request.logger.info(logPatternDefault(request, null), 'request completed');
      }
    });

    tryAddEvent(server, options, 'ext', 'onPostStart', async () => {
      logger.info(server.info, 'server started');
    });

    tryAddEvent(server, options, 'ext', 'onPostStop', async () => {
      logger.info(server.info, 'server stopped');
    });

    function isEnabledLogEvent(
      logEvents2: string[] | undefined = ['onPostStart', 'onPostStop', 'response', 'request-error'],
      name: string,
    ) {
      return logEvents2 && logEvents2.indexOf(name) !== -1;
    }

    function tryAddEvent(server2: any, options2: LogstashOptionsContract, type: string, event: any, cb: any) {
      const name = typeof event === 'string' ? event : event.name;
      if (isEnabledLogEvent(options2.logEvents, name)) {
        if (type === 'on') {
          server2.events.on(event, cb);
        } else if (type === 'ext') {
          server2.ext(event, cb);
        } else {
          throw new Error(`unsupported type ${type}`);
        }
      }
    }

    function logEvent(current: any, event: any) {
      const tags2 = event.tags;
      const { data } = event;

      const logObject = {
        tags: tags2,
        data,
      };

      let highest = 0;

      const level = 0;
      if (level && level > highest) {
        highest = level;
      }

      if (highest > 0) {
        current[current.levels.labels[highest]](logObject);
      } else {
        current[tags](logObject);
      }
    }

    function logChildDefault(request: Request) {
      return {
        trace: {
          id: request.headers.messageid || request.info.id,
        },
        http: {
          uri: request.url.pathname,
          path: request.url.pathname,
          url: `${request.headers.host}${request.url.pathname}`,
          protocol: request.url.protocol,
          host: request.headers.host,
          user_agent: request.headers['user-agent'],
          request_body: JSON.stringify(request.payload),
          request_header: JSON.stringify(request.headers),
          request_method: request.method,
        },
        peer: {
          service: appName,
        },
      };
    }

    function logPatternDefault(request: any, err2: any) {
      const { info } = request;
      const http = request.logger.fields.http || {};
      const peer = request.logger.fields.peer || {};
      const response = request.response || {};
      response._payload = response._payload || {};

      http.latency_seconds = (info.responded - info.received) / 1000.0;
      http.response_body = response._payload._data;
      http.response_header = JSON.stringify(request.response.headers);
      http.status_code = Number(request.raw.res.statusCode);
      http.request_body = JSON.stringify(request.payload);
      peer.hostname = request.logger.fields.hostname;

      return {
        kind: 'request',
        http,
        peer,
        err: err2,
      };
    }
  },
};

export default Log;
