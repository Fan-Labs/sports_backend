const app = require('../../src/app');

describe('\'businesses\' service', () => {
  it('registered the service', () => {
    const service = app.service('businesses');
    expect(service).toBeTruthy();
  });
});
