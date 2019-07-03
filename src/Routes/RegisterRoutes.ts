import { Server } from '@hapi/hapi';
import klawSync from 'klaw-sync';
import path from 'path';
import { BasePath } from '../Helpers';

const paths = () =>
  klawSync(BasePath.get('app'), {
    depthLimit: 2,
    nodir: true,
    filter: item =>
      item.path.indexOf('.controller') >= 0 &&
      item.path.indexOf('.d.ts') === -1 &&
      item.path.indexOf('.map') === -1
  }).map(item => ({
    ...item,
    filename: path.basename(item.path)
  }));

const RegisterRoutes = async (server: Server) => {
  paths().map(file => {
    try {
      const version = file.path.replace(BasePath.get('app'), '').split('/')[1];
      const controller = require(file.path).default;
      return new controller(server, version);
    } catch (err) {
      console.log(err);
      return null;
    }
  });
};

export default RegisterRoutes;
