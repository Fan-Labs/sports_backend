const app = require('../../src/app');

describe('\'offers\' service', () => {
  it('registered the service', () => {
    const service = app.service('offers');
    expect(service).toBeTruthy();
  });
});
