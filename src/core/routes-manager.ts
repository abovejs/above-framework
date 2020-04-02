import {
  RouteOptions,
  Util,
  ResponseToolkit,
  ResponseObject,
  Request,
  RouteOptionsValidate,
  RouteOptionsResponseSchema,
} from '@hapi/hapi';
import Joi from '@hapi/joi';

import { HttpContract } from '../contracts/http.contract';
import { SchemaContract } from '../contracts/application.contract';

export interface RouteOptionsContract extends RouteOptions {
  records?: boolean;
  paginate?: boolean;
  middleware?: Array<(req: Request, h: ResponseToolkit) => Promise<ResponseObject>>;
}

export interface RoutesManagerContract {
  method: Util.HTTP_METHODS;
  pathname: string;
  descriptor: TypedPropertyDescriptor<(http: HttpContract) => Promise<any>>;
}

class RoutesManager {
  protected static schemes: SchemaContract[] = [];

  public static defineSchemes = (schemes: SchemaContract[]) => {
    RoutesManager.schemes = schemes;
  };

  constructor(private options: RoutesManagerContract, private routeOptions: RouteOptionsContract) {}

  public get() {
    const { method, pathname, descriptor } = this.options;
    this.setFailActionIgnore();
    this.setSchemaForPaginate();

    const route = (baseRoute: string) => {
      const path = `${baseRoute}${pathname === '/' ? '' : pathname}`;
      this.setSchemaPersonalizateByPath(path);

      return {
        method,
        path,
        handler: async (req: Request, reply: ResponseToolkit) => {
          let paginate = {
            offset: 0,
            limit: 50,
          };
          if (this.routeOptions.paginate) {
            paginate = {
              offset: Number(req.query.offset),
              limit: Number(req.query.limit),
            };
          }
          if (descriptor.value) {
            if (this.routeOptions.middleware && this.routeOptions.middleware.length > 0) {
              // eslint-disable-next-line no-restricted-syntax
              for (const middleware of this.routeOptions.middleware) {
                // eslint-disable-next-line no-await-in-loop
                const responseMiddleware = await middleware(req, reply);
                if (responseMiddleware.source !== reply.continue) {
                  return responseMiddleware;
                }
              }
            }
            const response = await descriptor.value({
              request: {
                ...req,
                paginate: {
                  ...paginate,
                },
                additional: req,
              },
              reply,
            });

            if (this.routeOptions.records) {
              const { source } = response;
              const records = source instanceof Array ? source : [source];
              response.source = {
                meta: {
                  server: process.env.NODE_ENV === 'test' ? 'machine.testing.local' : require('os').hostname(),
                  ...paginate,
                  recordCount: records.length,
                },
                records,
              };
            }
            return response;
          }
          return reply.continue;
        },

        options: {
          auth: 'jwt',
          tags: ['api'],
          ...this.routeOptions,
          validate: {
            ...this.routeOptions.validate,
            options: {
              allowUnknown: true,
            },
          },
          records: undefined,
          paginate: undefined,
        },
      };
    };

    return route;
  }

  private setSchemaForPaginate() {
    if (this.routeOptions.paginate) {
      this.setSchemeInByKey('query', {
        limit: Joi.number().default(50),
        offset: Joi.number().default(0),
      });
    }
  }

  private setSchemaPersonalizateByPath(path: string) {
    RoutesManager.schemes.forEach(schema => {
      if ((!schema.include || schema.include.test(path)) && (!schema.exclude || !schema.exclude.test(path))) {
        if (schema.source.query) {
          this.setSchemeInByKey('query', schema.source.query);
        }
        if (schema.source.headers) {
          this.setSchemeInByKey('headers', schema.source.headers);
        }
        if (schema.source.params) {
          this.setSchemeInByKey('params', schema.source.params);
        }
        if (schema.source.payload) {
          this.setSchemeInByKey('payload', schema.source.payload);
        }
      }
    });
  }

  private setSchemeInByKey(key: keyof RouteOptionsValidate, source: RouteOptionsResponseSchema) {
    if (!this.routeOptions.validate || (this.routeOptions.validate && !this.routeOptions.validate[key])) {
      this.routeOptions.validate = {
        ...this.routeOptions.validate,
        [key]: source,
      };
    } else if (this.routeOptions.validate && this.routeOptions.validate[key]) {
      const validate = this.routeOptions.validate[key];
      // @ts-ignore
      if (validate && validate.append) {
        this.routeOptions.validate = {
          ...this.routeOptions.validate,
          // @ts-ignore
          [key]: validate.append(source),
        };
      }
    }
  }

  private setFailActionIgnore() {
    if (this.routeOptions && this.routeOptions.response) {
      this.routeOptions = {
        ...this.routeOptions,
        response: {
          ...this.routeOptions.response,
          failAction: 'ignore',
        },
      };
    }
  }
}

export default RoutesManager;
