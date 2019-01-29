const authentication = require('@feathersjs/authentication');
const userHooks = require('../../hooks/users');

module.exports = (config) => {
  return {
    before: {
      all: [],
      find: [],
      get: [],
      create: [
          authentication.hooks.authenticate(config.strategies),
          // This hook adds the user roles attributes to the JWT payload by
          // modifying params.payload.
          userHooks.addAdditionalUserFlags
        ],
      update: [],
      patch: [],
      remove: [authentication.hooks.authenticate('jwt')]
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
  }
};
