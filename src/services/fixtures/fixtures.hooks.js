const { authenticate } = require('@feathersjs/authentication').hooks;
const fixtureHooks = require('../../hooks/fixtures');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [
      fixtureHooks.includeTeams
    ],
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
    create: [
      //after creating a fixture, we create a business-fixture for each business in DB
      fixtureHooks.createBusinessFixtures
    ],
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
