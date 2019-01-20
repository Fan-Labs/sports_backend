const addAdditionalUserFlags =  (context) => {
	debugger
  const { user: { isMerchant, isAdmin }, payload } = context.params
  console.log(context.params)
  // make sure params.payload exists
  context.params.payload = context.params.payload || {}
  // merge in a user properties
  Object.assign(context.params.payload, {isMerchant, isAdmin})
}

module.exports = {
	addAdditionalUserFlags,
}