import Hapi from '@hapi/hapi';
import equal from 'fast-deep-equal';

import { ApplicationContract } from '../contracts/application.contract';
import RootPath from '../utils/root-path';
import Log from '../plugins/log';
import Swagger from '../plugins/swagger';
import Jwt from '../plugins/jwt';
import Routes from './routes';
import RoutesManager from './routes-manager';
import ExceptionManager from './exception-manager';
import ConsoleErrors from './console-errors';
import Health from '../plugins/health';
import { consoleError } from '../helpers';

class Ignition {
  private static instance: {
    key: ApplicationContract;
    server: Hapi.Server;
  }[] = [];

  private server: Hapi.Server;

  constructor(readonly options: ApplicationContract) {
    const serverInstace = Ignition.instance.find(instance => equal(instance.key, options));
    if (serverInstace) {
      this.server = serverInstace.server;
    } else {
      this.server = new Hapi.Server({
        port: process.env.PORT,
        host: process.env.HOST,
        debug: {
          log: ['error', 'database', 'read'],
        },
        state: {
          strictHeader: false,
        },
        routes: {
          timeout: {
            server: (parseInt(process.env.TIMEOUT || '240', 10) || 240) * 1000,
            socket: (parseInt(process.env.TIMEOUT || '240', 10) || 240) * 1000 + 1000,
          },
          cors: true,
          validate: {
            failAction: (_request, _h, err) => {
              throw err;
            },
          },
        },
      });
      RootPath.definePath(options.path);
      if (options.schemes && options.schemes.length > 0) {
        RoutesManager.defineSchemes(options.schemes);
      }
      Ignition.instance.push({
        key: options,
        server: this.server,
      });
    }
  }

  public async start() {
    process.on('unhandledRejection', err => {
      consoleError(err);
      process.exit(1);
    });
    await this.init();
    return this.server;
  }

  private async init() {
    await this.loadPlugins();
    await this.loadRoutes();

    if (this.options.database && this.options.database.authenticate) {
      await this.options.database.authenticate();
    }

    if (process.env.NODE_ENV !== 'test') {
      await this.server.start();
      // eslint-disable-next-line no-console
      console.log('Server running on %s', this.server.info.uri);
    }
  }

  private async loadRoutes() {
    await Routes.load(this.server);
  }

  private async loadPlugins() {
    ExceptionManager.set(this.server);
    ConsoleErrors.set(this.server);
    if (this.options.plugins && this.options.plugins.length > 0) {
      this.server.register(this.options.plugins);
    }

    if (process.env.NODE_ENV === 'stage' || process.env.NODE_ENV === 'production') {
      await this.server.register({
        plugin: Log,
        options: {
          host: process.env.LOG_HOST,
          port: process.env.LOG_PORT,
          bztoken: process.env.LOG_TOKEN,
          enableConsole: process.env.LOG_CONSOLE_ENABLE === 'true',
          env: process.env.NODE_ENV,
          versionApi: require(RootPath.get('../package.json')).version,
          appName: require(RootPath.get('../package.json')).name,
        } as any,
      });
    }

    if (process.env.NODE_ENV !== 'production') {
      await this.server.register({ plugin: Swagger });
    }

    await this.server.register({ plugin: Jwt });
    await this.server.register({
      plugin: Health,
      options: {
        database: this.options.database,
      } as any,
    });
  }
}

export default Ignition;
