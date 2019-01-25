// Initializes the `businesses` service on path `/businesses`
const createService = require('feathers-sequelize');
const createModel = require('../../models/businesses.model');
const hooks = require('./businesses.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/businesses', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('businesses');

  service.hooks(hooks);
};
