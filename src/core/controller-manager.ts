import { Util, Server, ServerRoute, ResponseObject } from '@hapi/hapi';

import RoutesManager, { RouteOptionsContract } from './routes-manager';
import { HttpContract } from '..';

export interface RegisterContract {
  server: Server;
  path: string;
  version: string;
  name: string;
}

type MethodType = (http: HttpContract) => Promise<ResponseObject>;

class ControllerManager {
  private static routes: any = [];

  public static register = ({ name, path, server, version }: RegisterContract) => {
    const items = ControllerManager.routes[name];
    delete ControllerManager.routes[name];
    const routes: Array<ServerRoute> = [];
    if (items) {
      items.forEach((item: any) => {
        routes.push(item(`/${version}${path}`));
      });
      server.route(routes);
    }
  };

  public static request = (method: Util.HTTP_METHODS) => (pathname: string, options: RouteOptionsContract) => {
    return (target: any, _: string, descriptor: TypedPropertyDescriptor<MethodType>) => {
      const {
        constructor: { name },
      } = target;
      if (!ControllerManager.routes[name]) {
        ControllerManager.routes[name] = [];
      }
      const routesManager = new RoutesManager(
        {
          descriptor,
          method,
          pathname,
        },
        options,
      );
      ControllerManager.routes[name].push(routesManager.get());
      return descriptor;
    };
  };
}

export default ControllerManager;
