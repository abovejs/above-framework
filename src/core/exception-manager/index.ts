import { Server } from '@hapi/hapi';

import { buildJoiError, buildGenericErrors } from './parser';
import BaseException from '../../bases/base-exception';

class ExceptionManager {
  public static set(server: Server) {
    server.ext('onPreResponse', async (request, h) => {
      const error: any = request.response;
      if (error instanceof BaseException) {
        return h.response(error.getResponse()).code(error.getResponse().statusCode);
      }
      if (error.isBoom) {
        let newResponse: { statusCode: number; body: object } = {
          body: {},
          statusCode: 500,
        };
        if (error.details) {
          newResponse = buildJoiError(error);
        } else {
          newResponse = buildGenericErrors(error);
        }
        error.output.statusCode = newResponse.statusCode;
        error.output.payload = newResponse.body;
        return h.response(error.output.payload).code(error.output.statusCode);
      }

      return h.continue;
    });
  }
}

export default ExceptionManager;
