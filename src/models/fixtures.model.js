// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const fixtures = sequelizeClient.define('fixtures', {
    startTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    duration: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    stats: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  fixtures.associate = function (models) {
    fixtures.belongsTo(models.teams, {foreignKey: 'homeTeamId'})
    fixtures.belongsTo(models.teams, {foreignKey: 'awayTeamId'})
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return fixtures;
};
