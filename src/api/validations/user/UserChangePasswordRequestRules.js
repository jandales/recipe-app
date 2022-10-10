const { body, validationResult } = require('express-validator');

module.exports = {

UserChangePasswordRequestRules  : () => {

   return [

        body('password')
            .not().isEmpty()
            .withMessage('Password is required')    
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 chars long'),
            
        body('new_password')
            .not().isEmpty()
            .withMessage('New password is required')       
            .isLength({ min: 6 })           
            .withMessage('New password must be at least 6 chars long'),

        body('password_confirmation')
            .not().isEmpty()
            .withMessage('Confirm password is required')   
            .custom((value, {req}) => {
                if(value != req.body.new_password){
                    throw new Error("Password didn't match") 
                }
                return true;
        })
   ]
}
      
}