module.exports = function(app) {

  function getLink(type, hash) {
    const url = process.env.FRONTEND_URL + type + '?token=' + hash
    return url
  }

  function sendEmail(email) {
    return app.service('mailer').create(email).then(function (result) {
      console.log('Sent email', result)
    }).catch(err => {
      console.log('Error sending email', err)
    })
  }

  return {
    notifier: function(type, user, notifierOptions) {
      let tokenLink
      let email
      switch (type) {
        case 'resendVerifySignup': //sending the user the verification email
          tokenLink = getLink('verify', user.verifyToken)
          email = {
             from: process.env.FROM_EMAIL,
             to: user.email,
             subject: 'Verify Signup',
             html: `Verify your email using this link: ${tokenLink}`
          }
          return sendEmail(email)
          break

        case 'verifySignup': // confirming verification
          email = {
             from: process.env.FROM_EMAIL,
             to: user.email,
             subject: 'Confirm Signup',
             html: 'Thanks for verifying your email'
          }
          return sendEmail(email)
          break

        case 'sendResetPwd':
          tokenLink = getLink('passwordreset', user.resetToken)
          email = {
             from: process.env.FROM_EMAIL,
             to: user.email,
             subject: 'Reset your password',
             html: `Reset your password here: ${tokenLink}` //replace with full url
          }
          return sendEmail(email)
          break

        case 'resetPwd':
          email = {
             from: process.env.FROM_EMAIL,
             to: user.email,
             subject: 'Confirm Password Reset',
             html: 'Password reset successfully'
          }
          return sendEmail(email)
          break

        case 'passwordChange':
          email = {}
          return sendEmail(email)
          break

        case 'identityChange':
          tokenLink = getLink('verifyChanges', user.verifyToken)
          email = {}
          return sendEmail(email)
          break

        default:
          break
      }
    }
  }
}