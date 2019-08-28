import forTerminal from 'youch-terminal';
import Youch from 'youch';

export const consoleError = (error: any) => {
  new Youch(error, {}).toJSON().then((output: any) => {
    // eslint-disable-next-line no-console
    console.error(forTerminal(output));
  });
};
