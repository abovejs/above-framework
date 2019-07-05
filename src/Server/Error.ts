import { Server } from '@hapi/hapi';
import BaseException from '../Exceptions/BaseException';

export const filterOfBaseException = (server: Server) => {
  server.ext('onPreResponse', async (request, h) => {
    const error = request.response;
    if (error instanceof BaseException) {
      return h
        .response(error.getResponse())
        .code(error.getResponse().statusCode);
    }
    return h.continue;
  });
};
