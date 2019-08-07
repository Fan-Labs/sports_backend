const { authenticate } = require('@feathersjs/authentication').hooks;
const businessHooks = require('../../hooks/business');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [businessHooks.queryByMerchantId],
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
