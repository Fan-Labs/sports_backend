const users = require('./users/users.service.js');
const mailer = require('./mailer/mailer.service.js');
const authmanagement = require('./authmanagement/authmanagement.service.js');
const businesses = require('./businesses/businesses.service.js');
const authentication = require('./authentication/authentication.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(authentication);
  app.configure(users);
  app.configure(mailer);
  app.configure(authmanagement);
  app.configure(businesses);
};
