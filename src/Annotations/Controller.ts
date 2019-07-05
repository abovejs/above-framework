import {
  Request,
  ResponseToolkit,
  RouteOptions,
  Server,
  Util
} from '@hapi/hapi';
import { mappedSchema } from 'joi';
import { IHttp } from '..';

interface IRouteOptions extends RouteOptions {
  statusCode?: number;
}

const methods = [];

export const Controller = (baseRoute: string = '') => {
  return function(target: any) {
    const original = target;
    const routes = [];
    const f: any = function(server: Server, prefix: string) {
      methods[target.name].forEach(item => {
        routes.push({
          ...item,
          path: `/${prefix}${item.path.replace('{baseRoute}', baseRoute)}`
        });
      });
      server.route(routes);
      return original;
    };
    f.prototype = original.prototype;
    return f;
  };
};

type MethodType<T extends mappedSchema> = (http: IHttp<T>) => Promise<any>;

const request = (method: Util.HTTP_METHODS) => (
  baseUrl: string,
  options?: IRouteOptions
) => {
  return (
    target: any,
    _key: string,
    descriptor: TypedPropertyDescriptor<MethodType<typeof options.validate>>
  ) => {
    if (methods[target.constructor.name] === undefined) {
      methods[target.constructor.name] = [];
    }
    if (options && options.response) {
      options.response = {
        ...options.response,
        failAction: 'ignore'
      };
    }
    methods[target.constructor.name].push({
      method,
      path: `{baseRoute}${baseUrl === '/' ? '' : baseUrl}`,
      options: {
        description: '',
        auth: 'jwt',
        handler: async (req: Request, reply: ResponseToolkit) => {
          const response = await descriptor.value({ request: req, reply });
          if (response && response.server && response.app) {
            return response;
          }
          return reply
            .response(response)
            .code(options && options.statusCode ? options.statusCode : 200);
        },
        tags: ['api'],
        ...options
      }
    });
    return descriptor;
  };
};

export const Get = request('GET');
export const Post = request('POST');
export const Put = request('PUT');
export const Delete = request('DELETE');
export const Patch = request('PATCH');
export const Options = request('OPTIONS');
