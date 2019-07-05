import * as Hapi from '@hapi/hapi';
import { BasePath } from '../Helpers';
import RegisterPlugins from '../Plugins/RegisterPlugins';
import RegisterRoutes from '../Routes/RegisterRoutes';
import Server from '../Server';

const configureServer = async (server: Hapi.Server) => {
  try {
    await RegisterPlugins(server);
    await RegisterRoutes(server);
    return true;
  } catch {
    return false;
  }
};
interface IValidate {
  path?: string;
}
const Bootstrap = async ({ path }: IValidate) => {
  const server = Server();
  if (path) {
    BasePath.folder = path;
  }
  await configureServer(server);
  if (process.env.NODE_ENV !== 'test') {
    await server.start();
    console.info(`Server running: ${server.info.uri}`);
  }
  return server;
};

export default Bootstrap;
