// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const businessFixture = sequelizeClient.define('business_fixture', {
    //We create fixtures for all businesses, set to inactive as default
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = false;
      }
    },
    indexes: [
      {fields: ['fixtureId', 'businessId'], unique: true}
    ]
  });

  // eslint-disable-next-line no-unused-vars
  businessFixture.associate = function (models) {
    businessFixture.belongsTo(models.fixtures, {foreignKey: 'fixtureId'})
    businessFixture.belongsTo(models.businesses, {foreignKey: 'businessId'})
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return businessFixture;
};
