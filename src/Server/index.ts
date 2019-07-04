import Hapi from '@hapi/hapi';
import Youch from 'youch';
import forTerminal from 'youch-terminal';
import { filterOfBaseException } from './Error';

const debug = {
  log: ['error', 'database', 'read']
};

const Server = () => {
  const server = new Hapi.Server({
    port: process.env.PORT,
    host: process.env.HOST,
    debug,
    routes: {
      timeout: {
        server: (parseInt(process.env.APP_TIMEOUT, 10) || 240) * 1000,
        socket: (parseInt(process.env.APP_TIMEOUT, 10) || 240) * 1000 + 1000
      },
      cors: true,
      validate: {
        failAction: (_request, _h, err) => {
          throw err;
        }
      }
    }
  });

  server.events.on('request', (_event, tags) => {
    if (tags.error && process.env.NODE_ENV !== 'test') {
      new Youch(tags.error, {}).toJSON().then(output => {
        console.error(forTerminal(output));
      });
    }
  });

  filterOfBaseException(server);

  return server;
};

export default Server;
