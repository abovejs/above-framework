import path from 'path';

export class BasePath {
  public static folder = null;
  public static get(filename: string) {
    if (BasePath.folder) {
      return path.resolve(BasePath.folder, filename);
    }
    const basepath = process.env.NODE_ENV !== 'test' ? '' : '/../../../src';
    const pathResolve = path.resolve(
      path.dirname(require.main.filename) + basepath
    );
    return path.resolve(pathResolve, filename);
  }
}
