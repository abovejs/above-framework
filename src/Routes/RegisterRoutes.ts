import { Server } from '@hapi/hapi';
import klawSync from 'klaw-sync';
import path from 'path';
import { BasePath } from '../Helpers';

const pathApi = BasePath.get('api');
const getFiles = () =>
  klawSync(pathApi, {nodir: true}).map(item => ({
    ...item,
    filename: path.basename(item.path)
  }));

const RegisterRoutes = async (server: Server) => {

  const files = getFiles().filter(
    item =>
      item.filename.indexOf('.controller') >= 0 &&
      item.filename.indexOf('.d.ts') === -1 &&
      item.filename.indexOf('.map') === -1
  );

  files.forEach(file => {
    try {
      const version = file.path.replace(pathApi, '').split('/')[1];
      const controller = require(file.path).default;
      return new controller(server, version);
    } catch (err) {
      console.log(err);
      return false;
    }
  });
};

export default RegisterRoutes;
