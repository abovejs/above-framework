import Hapi from '@hapi/hapi';
import Jwt from './Jwt';

import { BasePath } from '../Helpers';
import Log, { ILogstashOptions } from './Log';
import Swagger from './Swagger';

const RegisterPlugins = async (server: Hapi.Server) => {
  if (process.env.NODE_ENV !== 'production') {
    await server.register({
      plugin: Swagger
    });
  }

  await server.register({
    plugin: Jwt
  });

  if (
    process.env.BURZUM_HOST &&
    process.env.BURZUM_PORT &&
    process.env.BURZUM_TOKEN &&
    process.env.NODE_ENV === 'production'
  ) {
    await server.register({
      plugin: Log,
      options: {
        host: process.env.BURZUM_HOST,
        port: process.env.BURZUM_PORT,
        bztoken: process.env.BURZUM_TOKEN,
        env: process.env.NODE_ENV,
        versionApi: require(BasePath.get('../package.json')).version,
        appName: require(BasePath.get('../package.json')).name
      } as ILogstashOptions
    });
  }
};

export default RegisterPlugins;
