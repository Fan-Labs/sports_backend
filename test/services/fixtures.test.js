const app = require('../../src/app');

describe('\'fixtures\' service', () => {
  it('registered the service', () => {
    const service = app.service('fixtures');
    expect(service).toBeTruthy();
  });
});
