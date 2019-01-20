const authentication = require('@feathersjs/authentication');
const authManagement = require('feathers-authentication-management');
const jwt = require('@feathersjs/authentication-jwt');
const local = require('@feathersjs/authentication-local');
const userHooks = require('./hooks/users');

module.exports = function (app) {
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config))
   //.configure(authManagement())
  app.configure(jwt());
  app.configure(local());

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies),
        // This hook adds the user roles attributes to the JWT payload by
        // modifying params.payload.
        userHooks.addAdditionalUserFlags
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    }
  });
};
