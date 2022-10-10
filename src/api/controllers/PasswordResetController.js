

const { passwordResetEmail } = require('../emails/passwordResetEmail');
const { createToken }  = require('../../helper/generateToken');
const User = require('../models/user');

module.exports = {

  sendToEmail : async(req, res) => {

    const email = req.body.email;

    const token = createToken();

    const link = process.env.APP_CLIENT_URL + `/account/password/reset/${token}`;
    
    const body = {
      token_created_at : Date.now(),
      password_reset_token : token
    }

    await User.findOneAndUpdate({ email : email }, body);
      
    await passwordResetEmail(email, link);

    res.status(200).json({ message : 'Successfully link sent'});

}



}