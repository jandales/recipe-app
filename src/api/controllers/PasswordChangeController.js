const User = require('../models/user');

const { cryptpassword } = require('../../helper/encrytpassword');


const validateToken = (date) => {

    let oldDate = new Date(date).getTime();

    let now = new Date().getTime();    
  
    let diff = (now - oldDate) / 1000;
   
    diff /= (60 * 60);
    
    diff = Math.abs(Math.round(diff)); 

    return diff > 12 ? false : true;    
   
  };


module.exports =  {

    passwordChange : async (req, res) => {  
      
        const { token, password } = req.body;

        const user = await User.findOne({ password_reset_token : token });

        if (!user) return res.status(422).json({ errors : [ 
            { message : 'Email not found' }
        ] }); 

        if (!validateToken(user.token_created_at)) return res.status(422).json({errors : [
            { message : 'Invalid Token' }
        ]});
        
        const hashpassword = await cryptpassword(password);  

        await User.findOneAndUpdate({ email : user.email }, 
            {   password : hashpassword,
                password_reset_token : null,
                token_created_at : null 
            });
       
        res.status(200).json({message : 'successfully password updated'});
   
    } 

}