/* eslint-disable func-names */

import { Server } from '@hapi/hapi';

import ControllerManager from './controller-manager';

export const Controller = (path = '') => {
  return function (target: any) {
    const original = target;
    const f: any = function (server: Server, version: string) {
      ControllerManager.register({
        name: target.name,
        path,
        version,
        server,
      });
    };
    f.prototype = original.prototype;
    return f;
  };
};

export const Get = ControllerManager.request('GET');
export const Post = ControllerManager.request('POST');
export const Put = ControllerManager.request('PUT');
export const Delete = ControllerManager.request('DELETE');
export const Patch = ControllerManager.request('PATCH');
export const Options = ControllerManager.request('OPTIONS');
export const Head = ControllerManager.request('HEAD');
