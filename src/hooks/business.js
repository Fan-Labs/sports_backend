module.exports.queryByMerchantId = (context) => {
  //merchants can only fetch a list of their own businesses in the merchant portal
  if(context.params.user && context.params.user.isMerchant) {
    context.params.query = {
      ...context.params.query,
      merchantId: context.params.user.id
    }
  }

  return context
}

module.exports.includeNestedBusinessFixtures = (context) => {
  const sequelize = context.app.get('sequelizeClient');
  const { business_fixture } = sequelize.models;
  context.params.sequelize = {
    ...context.params.sequelize,
    include: [{
          model: business_fixture
      }]
  }

  return context
}

module.exports.createBusinessFixtures = async (context) => {
  const {id} = context.result

  const businessFixtureService = context.app.service('business-fixture')
  const {data} = await context.app.service('fixtures').find()

  data.forEach(fixture => {
    businessFixtureService.create({
      businessId: id,
      fixtureId: fixture.id
    })
  })

}

