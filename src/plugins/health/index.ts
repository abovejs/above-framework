import { Server } from '@hapi/hapi';

import HealthController from './health.controller';
import { DatabaseContract } from '../..';

const Health = {
  name: 'health-check',
  version: '1.0',
  register: async (
    server: Server,
    options: {
      database: DatabaseContract;
    },
  ) => {
    const controller = new HealthController(options.database);
    server.route([
      {
        method: 'GET',
        path: '/health',
        options: {
          auth: false,
          description: 'Heath check',
          tags: ['api'],
          handler: controller.ping,
        },
      },
      {
        method: 'GET',
        path: '/health/ping',
        options: {
          auth: false,
          description: 'Ping/Pong',
          tags: ['api'],
          handler: controller.ping,
        },
      },
      {
        method: 'GET',
        path: '/health/check',
        options: {
          auth: false,
          description: 'Ping/Pong',
          tags: ['api'],
          handler: controller.ping,
        },
      },
    ]);
  },
};

export default Health;
