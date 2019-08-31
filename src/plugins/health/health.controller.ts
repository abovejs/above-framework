import HTTPStatus from 'http-status';
import { Request, ResponseToolkit } from '@hapi/hapi';

import { DatabaseContract } from '../..';

class HealthController {
  private isShutdown = false;

  constructor(readonly database: DatabaseContract) {
    process.on('SIGTERM', () => {
      /* eslint-disable-next-line */
      console.info('Got SIGTERM. Graceful shutdown start', new Date().toISOString());
      this.isShutdown = true;
    });
  }

  async health(_: Request, reply: ResponseToolkit) {
    if (this.isShutdown) {
      return reply
        .response({
          status: 'shutting down...',
        })
        .code(HTTPStatus.INTERNAL_SERVER_ERROR);
    }
    try {
      await this.database.authenticate();

      return reply
        .response({
          database: 'ok',
          status: 'health',
        })
        .code(HTTPStatus.OK);
    } catch (error) {
      return reply
        .response({
          status: 'unhealth',
          error: JSON.stringify(error.message),
        })
        .code(HTTPStatus.INTERNAL_SERVER_ERROR);
    }
  }

  ping(_: Request, reply: ResponseToolkit) {
    return reply
      .response({
        status: 'pong',
      })
      .code(HTTPStatus.OK);
  }
}

export default HealthController;
