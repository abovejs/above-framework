import * as Hapi from '@hapi/hapi';
import { BasePath } from '../Helpers';
import RegisterPlugins from '../Plugins/RegisterPlugins';
import RegisterRoutes from '../Routes/RegisterRoutes';
import Server from '../Server';

export interface IApplication {
  database?: {
    authenticate: () => Promise<any>;
  };
  plugins?: Array<Hapi.Plugin<any>>;
  beforeStart?: (server: Hapi.Server) => Promise<any>;
  path?: string;
  route?: IRoute;
}

interface IRoute {
  controller: any;
  version: string;
}

const configureServer = async (server: Hapi.Server, route?: IRoute) => {
  try {
    await RegisterPlugins(server);
    if (!route) {
      await RegisterRoutes(server);
    } else {
      new route.controller(server, route.version);
    }
    return true;
  } catch (error) {
    console.log('Errrou', error);
    return false;
  }
};

const Bootstrap = async ({
  path,
  database,
  plugins,
  beforeStart,
  route
}: IApplication) => {
  console.log('1. Carrega projeto.');
  const server = Server();
  console.log('2. O Servidor foi criado.');

  if (path) {
    BasePath.folder = path;
    console.log('3. O Path foi setado.');
  }

  await configureServer(server, route);
  console.log('4. Servidor configurado.');

  if (plugins && plugins.length) {
    await server.register(plugins);
  }

  console.log('5. Configurou plugin extras');

  if (beforeStart) {
    await beforeStart(server);
  }

  console.log('6. Rodou beforeStart');

  try {
    if (database) {
      await database.authenticate();
      console.log('7. Autenticou no banco');
    }
  } catch (error) {
    console.log('errou banco');
    console.log(error);
  }

  if (process.env.NODE_ENV !== 'test') {
    await server.start();
    console.log('8. Iniciou servidor');
    console.info(`Server running: ${server.info.uri}`);
  }
  return server;
};

export default Bootstrap;
