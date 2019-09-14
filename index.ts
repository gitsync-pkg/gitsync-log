import * as log from 'npmlog';

export default {
  trace: (message: string, ...args: any[]) => {
    log.silly('', message, ...args);
  },
  debug: (message: string, ...args: any[]) => {
    log.verbose('', message, ...args);
  },
  info: (message: string, ...args: any[]) => {
    log.info('', message, ...args);
  },
  warn: (message: string, ...args: any[]) => {
    log.warn('', message, ...args);
  },
}
