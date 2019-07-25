import {
  Request,
  ResponseToolkit,
  RouteOptions,
  Server,
  Util
} from '@hapi/hapi';
import Joi from 'joi';
import { IHttp } from '..';

interface IRouteOptions extends RouteOptions {
  records?: boolean;
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

type MethodType = (http: IHttp) => Promise<any>;

const request = (method: Util.HTTP_METHODS) => (
  baseUrl: string,
  options?: IRouteOptions
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

    if (options.records) {
      const paginate = {
        limit: Joi.number().default(50),
        offset: Joi.number().default(0)
      };
      if (!options.validate || (options.validate && !options.validate.query)) {
        options.validate = {
          ...options.validate,
          query: Joi.object().keys(paginate)
        };
      } else if (options.validate && options.validate.query) {
        options.validate = {
          ...options.validate,
          // @ts-ignore
          query: options.validate.query.append(paginate)
        };
      }
    }

    methods[target.constructor.name].push({
      method,
      path: `{baseRoute}${baseUrl === '/' ? '' : baseUrl}`,
      options: {
        description: '',
        auth: 'jwt',
        handler: async (req: Request, reply: ResponseToolkit) => {
          const response = await descriptor.value({ request: req, reply });
          if (options.records) {
            const { source } = response;
            const records = source instanceof Array ? source : [source];
            response.source = {
              meta: {
                server: require('os').hostname(),
                offset: req.query.offset,
                limit: req.query.limit,
                recordCount: records.length
              },
              records
            };
          }
          return response;
        },
        tags: ['api'],
        ...options,
        records: undefined
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
