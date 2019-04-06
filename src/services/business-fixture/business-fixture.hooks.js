const { authenticate } = require('@feathersjs/authentication').hooks;
const businessFixtureHooks = require('../../hooks/businessFixtures');

module.exports = {
  before: {
    all: [ authenticate('jwt'), businessFixtureHooks.includeFixture ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
