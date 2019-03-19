const app = require('../../src/app');

describe('\'businessFixture\' service', () => {
  it('registered the service', () => {
    const service = app.service('business-fixture');
    expect(service).toBeTruthy();
  });
});
