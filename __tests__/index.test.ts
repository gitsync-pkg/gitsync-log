import log from '..';
import * as npmlog from 'npmlog';

function getLastLog() {
  return npmlog.record[npmlog.record.length - 1].message;
}

describe('gitsync-log', () => {
  test('debug level', async () => {
    log.debug('debug');
    expect(getLastLog()).toBe('debug');
  });

  test('info level', async () => {
    log.debug('info');
    expect(getLastLog()).toBe('info');
  });

  test('warn level', async () => {
    log.debug('warn');
    expect(getLastLog()).toBe('warn');
  });
});
