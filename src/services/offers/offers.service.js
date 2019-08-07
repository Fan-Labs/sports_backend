// Initializes the `offers` service on path `/offers`
const createService = require('feathers-sequelize');
const createModel = require('../../models/offers.model');
const hooks = require('./offers.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/offers', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('offers');

  service.hooks(hooks);
};
