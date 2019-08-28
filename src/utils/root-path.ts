import path from 'path';

class RootPath {
  private static path: string;

  public static definePath(pathname: string) {
    this.path = pathname;
  }

  public static get(pathname: string) {
    if (RootPath.path) {
      return path.resolve(RootPath.path, pathname);
    }
    const basepath = process.env.NODE_ENV !== 'test' ? '' : '/../../../src';
    const pathResolve = path.resolve(
      path.dirname(require.main && require.main.filename ? require.main.filename : '') + basepath,
    );
    return path.resolve(pathResolve, pathname);
  }
}

export default RootPath;
