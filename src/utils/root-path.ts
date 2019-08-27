import path from 'path';

class RootPath {
  private static path: string;

  public static definePath(pathname: string) {
    this.path = pathname;
  }

  public static get(pathname: string) {
    return path.resolve(this.path, pathname);
  }
}

export default RootPath;
