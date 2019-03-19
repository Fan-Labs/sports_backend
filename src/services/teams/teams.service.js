// Initializes the `teams` service on path `/teams`
const createService = require('feathers-sequelize');
const createModel = require('../../models/teams.model');
const hooks = require('./teams.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = {
    default: 25,
    max: 25
  }

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/teams', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('teams');

  service.hooks(hooks);
};
