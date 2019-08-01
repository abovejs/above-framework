import { Server } from '@hapi/hapi';
import klawSync from 'klaw-sync';
import path from 'path';
import R from 'ramda';
import { BasePath } from '../Helpers';

const getFiles = (root: string) => {
  try {
    const files = klawSync(root, { nodir: true }).map(item => ({
      ...item,
      filename: path.basename(item.path)
    }));
    console.log('Arquivos para serem carregados', files);

    return files;
  } catch {
    return [];
  }
};

const RegisterRoutes = async (server: Server) => {
  const rootApi = BasePath.get('api');
  const rootApp = BasePath.get('app');

  const allFiles: any = R.flatten([getFiles(rootApi), getFiles(rootApp)]);

  const files = allFiles.filter(
    item =>
      item.filename.indexOf('.controller') >= 0 &&
      item.filename.indexOf('.d.ts') === -1 &&
      item.filename.indexOf('.map') === -1
  );

  files.forEach(file => {
    try {
      const version = file.path
        .replace(rootApi, '')
        .replace(rootApp, '')
        .split('/')[1];
      console.log('Carregar a seguinte controller', file.path);
      const controller = require(file.path).default;
      return new controller(server, version);
    } catch (err) {
      console.log(err);
      return false;
    }
  });
};

export default RegisterRoutes;
