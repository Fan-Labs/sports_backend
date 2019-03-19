// Initializes the `fixtures` service on path `/fixtures`
const createService = require('feathers-sequelize');
const createModel = require('../../models/fixtures.model');
const hooks = require('./fixtures.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/fixtures', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('fixtures');

  service.hooks(hooks);
};
