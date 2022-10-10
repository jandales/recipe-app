const User = require('../models/user');
const { sendEmailRegistration } = require('../emails/registrationEmail');

const register = async (req, res) => {
    
    const { email } = req.body;

    const existUser = await User.findOne({email : email }).count();

    if (existUser > 0) return res.status(409).json( { message : 'Email already Resgistered'});
   
    try {
    
        const user = new User(req.body);    
        
        let response =  await user.save(); 

        const { name, email } = req.body;

        // await sendEmailRegistration(email, name);

        res.status(200).json(response); 

    } catch(err) {

        console.log(err);  

    }

}

module.exports = {
     register
}