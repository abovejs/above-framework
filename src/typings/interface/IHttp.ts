import { Request, ResponseToolkit } from 'hapi';
import { extractType, mappedSchema } from 'joi';
import 'joi-extract-type';

type Diff<
  T extends string | symbol | number,
  U extends string | symbol | number
> = ({ [P in T]: P } &
  { [P in U]: never } & {
    [x: string]: never;
  })[T];

type Omit<T, K extends keyof T> = { [P in Diff<keyof T, K>]: T[P] };

type IRequest<T> = Omit<Request, 'payload' | 'params' | 'query'> & T;

interface IHttp<
  T extends mappedSchema = {
    readonly payload: any;
    readonly params: any;
    readonly query: any;
  }
> {
  request: IRequest<extractType<T>>;
  reply: ResponseToolkit;
}
export default IHttp;
