module.exports.createBusinessFixtures = async (context) => {
  const {id} = context.result

  const businessFixtureService = context.app.service('business-fixture')
  const {data} = await context.app.service('businesses').find()

  data.forEach(business => {
    businessFixtureService.create({
      businessId: business.id,
      fixtureId: id
    })
  })

}

module.exports.includeTeams = (context) => {
  const sequelize = context.app.get('sequelizeClient');
  const { teams } = sequelize.models;

  context.params.sequelize = {
    ...context.params.sequelize,
    include: [
      {
          model: teams,
          as: 'homeTeam'
      },
      {
          model: teams,
          as: 'awayTeam'
      }
    ]
  }

  return context
}
