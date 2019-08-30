import * as log from 'npmlog';

export default {
  verbose: (message: string, ...args: any[]) => {
    log.verbose('', message, ...args);
  },
  info: (message: string, ...args: any[]) => {
    log.info('', message, ...args);
  },
  warn: (message: string, ...args: any[]) => {
    log.warn('', message, ...args);
  },
}
