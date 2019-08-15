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
  } catch {
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
  const server = Server();
  if (path) {
    BasePath.folder = path;
  }

  await configureServer(server, route);

  if (plugins && plugins.length) {
    await server.register(plugins);
  }

  if (beforeStart) {
    await beforeStart(server);
  }

  if (database && database.authenticate) {
    await database.authenticate();
  }

  if (process.env.NODE_ENV !== 'test') {
    await server.start();
    console.info(`Server running: ${server.info.uri}`);
  }
  return server;
};

export default Bootstrap;
