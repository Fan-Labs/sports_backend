// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const offers = sequelizeClient.define('offers', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    offerType: {
      type: DataTypes.ENUM,
      values: ['percent_discount', 'fixed_price', 'x_for_y'],
      allowNull: false,
    },
    offerDetails: {
      type: DataTypes.JSON,
      allowNull: true
    },
    itemType: {
      type: DataTypes.ENUM,
      values: ['beer', 'wine', 'spirit', 'soft_drink', 'food'],
      allowNull: false,
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  offers.associate = function (models) {
    offers.belongsTo(models.users, {foreignKey: {
      name: 'merchantId',
      allowNull: false
    },
    onDelete: 'CASCADE'})
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return offers;
};
