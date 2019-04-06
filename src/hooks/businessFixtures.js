module.exports.includeFixture = (context) => {
  const sequelize = context.app.get('sequelizeClient');
  const { fixtures, teams } = sequelize.models;

  context.params.sequelize = {
    ...context.params.sequelize,
    include: [
      {
          model: fixtures,
          include: [
            { model: teams, as: 'homeTeam'},
            { model: teams, as: 'awayTeam'}
          ]
      }
    ]
  }

  return context
}
