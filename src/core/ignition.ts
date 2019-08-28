import Hapi from '@hapi/hapi';

import { ApplicationContract } from '../contracts/application.contract';
import EnvManager from '../utils/env-manager';
import RootPath from '../utils/root-path';
import Log from '../plugins/log';
import Swagger from '../plugins/swagger';
import Jwt from '../plugins/jwt';
import Routes from './routes';
import RoutesManager from './routes-manager';
import ExceptionManager from './exception-manager';
import ConsoleErrors from './console-errors';

class Ignition {
  private server: Hapi.Server;

  constructor(readonly options: ApplicationContract) {
    this.server = new Hapi.Server({
      port: EnvManager.get<number>('PORT', { required: true, defaultValue: 3333 }),
      host: EnvManager.get<string>('HOST', { required: true, defaultValue: 'localhost' }),
    });
    RootPath.definePath(options.path);
    if (options.schemes && options.schemes.length > 0) {
      RoutesManager.defineSchemes(options.schemes);
    }
  }

  public async start() {
    process.on('unhandledRejection', err => {
      // eslint-disable-next-line no-console
      console.log(err);
      process.exit(1);
    });
    await this.init();
    return this.server;
  }

  private async init() {
    await this.loadPlugins();
    await this.loadRoutes();
    await this.server.start();
    // eslint-disable-next-line no-console
    console.log('Server running on %s', this.server.info.uri);
  }

  private async loadRoutes() {
    await Routes.load(this.server);
  }

  private async loadPlugins() {
    ExceptionManager.set(this.server);
    ConsoleErrors.set(this.server);
    if (this.options.plugins && this.options.plugins.length > 0) {
      this.server.register(this.options.plugins);
    }

    if (process.env.NODE_ENV === 'stage' || process.env.NODE_ENV === 'production') {
      await this.server.register({
        plugin: Log,
        options: {
          host: process.env.LOG_HOST,
          port: process.env.LOG_PORT,
          bztoken: process.env.LOG_TOKEN,
          env: process.env.NODE_ENV,
          versionApi: require(RootPath.get('./package.json')).version,
          appName: require(RootPath.get('./package.json')).name,
        } as any,
      });
    }

    if (process.env.NODE_ENV !== 'production') {
      await this.server.register({ plugin: Swagger });
    }

    await this.server.register({ plugin: Jwt });
  }
}

export default Ignition;
