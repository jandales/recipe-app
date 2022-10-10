const { body, validationResult } = require('express-validator');

module.exports = {
    ConfirmationPasswordRequestRules : () => {

    return [

            body('password')
                .isLength({ min: 6 })
                .withMessage('Password must be at least 6 chars long'),           
        

            body('confirmation_password')
                .isLength({ min : 6})
                .withMessage('Password must be at least 6 chars long')
                .custom((value, {req, res}) => {                   
                    if(value != req.body.password){                      
                         throw new Error("Password didn't match") 
                    }
                    return true;
            })
    ]
    }
}


