import { Server } from '@hapi/hapi';

import BaseException from '../bases/base-exception';
import { consoleError } from '../helpers';

class ConsoleErrors {
  public static set(server: Server) {
    if (process.env.NODE_ENV !== 'test') {
      server.events.on('request', (_, tags) => {
        if (tags.error && !(tags.error instanceof BaseException)) {
          consoleError(tags.error);
        }
      });
    }
  }
}

export default ConsoleErrors;
