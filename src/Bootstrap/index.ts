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
  beforeStart: (server: Hapi.Server) => Promise<any>;
  path?: string;
}

const configureServer = async (server: Hapi.Server) => {
  try {
    await RegisterPlugins(server);
    await RegisterRoutes(server);
    return true;
  } catch {
    return false;
  }
};

const Bootstrap = async ({
  path,
  database,
  plugins,
  beforeStart
}: IApplication) => {
  const server = Server();
  if (path) {
    BasePath.folder = path;
  }
  if (database) {
    await database.authenticate();
  }
  await configureServer(server);

  if (plugins && plugins.length) {
    await server.register(plugins);
  }

  if (beforeStart) {
    await beforeStart(server);
  }

  if (process.env.NODE_ENV !== 'test') {
    await server.start();
    console.info(`Server running: ${server.info.uri}`);
  }
  return server;
};

export default Bootstrap;
