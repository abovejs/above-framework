import { Server } from 'hapi';
import JWT from 'hapi-auth-jwt2';

export default {
  name: 'auth-jwt',
  version: '1.0',
  register: async (server: Server) => {
    await server.register(JWT as any);
    server.auth.strategy('jwt', 'jwt', {
      key: process.env.APP_JWT,
      verifyOptions: {
        ignoreExpiration: true,
        algorithms: ['HS256']
      },
      validate: async () => ({ isValid: true })
    });
    server.auth.default('jwt');
  }
};
