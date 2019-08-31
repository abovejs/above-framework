import { Server } from '@hapi/hapi';
import klawSync from 'klaw-sync';
import R from 'ramda';

import path from 'path';
import RootPath from '../utils/root-path';
import { consoleError } from '../helpers';

class Routes {
  public static load(server: Server) {
    const [rootApi, rootApp] = [RootPath.get('api'), RootPath.get('app')];
    this.findAll([rootApi, rootApp]).forEach(file => {
      try {
        const version = file.path
          .replace(rootApi, '')
          .replace(rootApp, '')
          .split('/')[1];
        const Controller = require(file.path).default;
        new Controller(server, version);
      } catch (error) {
        consoleError(error);
      }
    });
  }

  private static getFiles(root: string) {
    try {
      const files = klawSync(root, { nodir: true }).map(item => ({
        ...item,
        filename: path.basename(item.path),
      }));
      return files;
    } catch {
      return [];
    }
  }

  private static findAll(paths: string[]) {
    return R.flatten(paths.map(pathname => this.getFiles(pathname))).filter(
      item =>
        item.filename.indexOf('.controller') >= 0 &&
        item.filename.indexOf('.d.ts') === -1 &&
        item.filename.indexOf('.map') === -1,
    );
  }
}

export default Routes;
