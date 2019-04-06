const { authenticate } = require('@feathersjs/authentication').hooks;
const { iff, isProvider, discard } = require('feathers-hooks-common');
const hooks = require('../../hooks');
const businessHooks = require('../../hooks/business');
const userHooks = require('../../hooks/users');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [
      businessHooks.queryByMerchantId,
      businessHooks.includeNestedBusinessFixtures,
      hooks.rawFalse
    ],
    get: [ ],
    create: [
      userHooks.addMerchantId
    ],
    update: [],
    patch: [
      userHooks.addMerchantId
    ],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      //after creating a business, we create a business-fixture for each fixture in DB
      businessHooks.createBusinessFixtures
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
