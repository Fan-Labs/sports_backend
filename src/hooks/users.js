const addAdditionalUserFlags =  (context) => {
	debugger
  const { user: { isMerchant, isAdmin, isVerified }, payload } = context.params
  console.log(context.params)
  // make sure params.payload exists
  context.params.payload = context.params.payload || {}
  // merge in a user properties
  Object.assign(context.params.payload, {isMerchant, isAdmin, isVerified})
}


//add merchant ID to business data payload
const addMerchantId =  (context) => {
  console.log('creating/patching a businesses with user id: '+ context.params.user.id)      
  //only merchants can create businesses
  if(context.params.user && context.params.user.isMerchant) {
    context.data.merchantId = context.params.user.id
  } else {
  	throw new Error('User is not a merchant');
  }
  return context
}

module.exports = {
	addAdditionalUserFlags,
	addMerchantId
}