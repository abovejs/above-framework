import { ServerRegisterPluginObject, RouteOptionsValidate } from '@hapi/hapi';

import { DatabaseContract } from './database.contract';
import { ControllerContract } from './controller.contract';

export type SchemaContract = {
  include?: RegExp;
  exclude?: RegExp;
  source: RouteOptionsValidate;
};

export interface ApplicationContract {
  database?: DatabaseContract;
  plugins?: Array<ServerRegisterPluginObject<any>>;
  path: string;
  controller?: ControllerContract;
  schemes?: SchemaContract[];
}
