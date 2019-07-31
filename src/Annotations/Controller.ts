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
  paginate?: boolean;
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
      console.log(routes);
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

    if (options.paginate) {
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
          let paginate = {
            offset: 0,
            limit: 50
          };
          if (options.paginate) {
            paginate = {
              offset: Number(req.query.offset),
              limit: Number(req.query.limit)
            };
          }
          const response = await descriptor.value({
            request: {
              ...req,
              paginate: {
                ...paginate
              }
            },
            reply
          });
          if (options.records) {
            const { source } = response;
            const records = source instanceof Array ? source : [source];

            response.source = {
              meta: {
                server:
                  process.env.NODE_ENV === 'test'
                    ? 'machine.testing.local'
                    : require('os').hostname(),
                ...paginate,
                recordCount: records.length
              },
              records
            };
          }
          return response;
        },
        tags: ['api'],
        ...options,
        records: undefined,
        paginate: undefined
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
