import { Server } from '@hapi/hapi';
import JWT from 'hapi-auth-jwt2';
import { VerifyOptions } from 'jsonwebtoken';

const Jwt = {
  name: 'auth-jwt',
  version: '1.0.0',
  register: async (server: Server) => {
    await server.register(JWT as any);
    server.auth.strategy('jwt', 'jwt', {
      key: process.env.APP_JWT || process.env.JWT,
      verifyOptions: {
        ignoreExpiration: false,
        algorithms: ['HS256'],
      } as VerifyOptions,
      validate: async () => ({ isValid: true }),
    });
    server.auth.default('jwt');
  },
};

export default Jwt;
