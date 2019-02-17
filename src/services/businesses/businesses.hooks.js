const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [
      (context) => {
        console.log('finding all businesses')
        console.log(context.params.user.id)
        
        //merchants can only fetch a list of their own businesses in the merchant portal
        if(context.params.user.isMerchant) {
          context.params.query = {
            ...context.params.query,
            merchantId: context.params.user.id
          }
        }

        return context
      }
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
