import { Request, ResponseToolkit } from '@hapi/hapi';
import Joi from '@hapi/joi';
import 'joi-extract-type';

type Diff<T extends string | symbol | number, U extends string | symbol | number> = ({ [P in T]: P } &
  { [P in U]: never } & {
    [x: string]: never;
  })[T];

type Omit<T, K extends keyof T> = { [P in Diff<keyof T, K>]: T[P] };

export type RequestContract<T> = Omit<Request, 'payload' | 'params' | 'query' | 'headers'> &
  T & {
    paginate: {
      limit: number;
      offset: number;
    };
    additional: Pick<Request, 'payload' | 'params' | 'query' | 'headers'>;
  };

export interface HttpContract<
  T extends Joi.mappedSchema = {
    readonly payload: any;
    readonly params: any;
    readonly query: any;
  }
> {
  request: RequestContract<Joi.extractType<T>>;
  reply: ResponseToolkit;
}
