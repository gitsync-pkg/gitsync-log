import log from '..';
import * as npmlog from 'npmlog';

function getLastLog() {
  return npmlog.record[npmlog.record.length - 1];
}

describe('gitsync-log', () => {
  test('trace level', async () => {
    log.trace('trace');
    expect(getLastLog()).toMatchObject({level: 'silly', message: 'trace'});
  });

  test('debug level', async () => {
    log.debug('debug');
    expect(getLastLog()).toMatchObject({level: 'verbose', message: 'debug'});
  });

  test('info level', async () => {
    log.info('info');
    expect(getLastLog()).toMatchObject({level: 'info', message: 'info'});
  });

  test('warn level', async () => {
    log.warn('warn');
    expect(getLastLog()).toMatchObject({level: 'warn', message: 'warn'});
  });
});
