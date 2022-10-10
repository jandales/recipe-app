const { sendEmail } = require('../../helper/email');

const body = (link) => {
    return `<h1>Reset Password</h1>
    <br>
      <p>Someone (hopefully you) has requested a password reset for your Recipe app account. Follow the link below to set a new password</p>
    <br>
    <a href="${link}">${link}</a>
    <br>
    <p>If you don't wish to reset your password, disregard this email and no action will be taken.</p>
  `};

module.exports = {
    passwordResetEmail : async(email, link) => {
        await sendEmail(email, 'password reset', body(link));
    }
}