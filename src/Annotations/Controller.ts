import { RouteOptions, Server, Util } from 'hapi';

const methods = [];

export const Controller = (baseRoute: string = '') => {
  return function(target: any) {
    const original = target;
    const f: any = function(server: Server, prefix: string) {
      const routes = [];
      methods[target.name].forEach(item => {
        const route = {
          ...item,
          path: item.path.replace('{baseRoute}', baseRoute)
        };
        routes.push({
          routes: {
            prefix: `/${prefix}`
          },
          plugin: {
            name: `${route.method}_${route.path}`,
            register(serve) {
              serve.route(route);
            }
          }
        });
      });
      server.register(routes);

      return original;
    };
    f.prototype = original.prototype;
    return f;
  };
};

type MethodType = (http: any) => any;

const request = (method: Util.HTTP_METHODS) => (
  baseUrl: string,
  options?: RouteOptions
) => {
  return (
    target: any,
    _key: string,
    descriptor: TypedPropertyDescriptor<MethodType>
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
        handler: (req, reply) => descriptor.value({ request: req, reply }),
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
