const { body, validationResult } = require('express-validator');

module.exports = {

PasswordRequestRules  : () => {

   return [

        body('password')
            .not().isEmpty()
            .withMessage('Password is required')  
       ]
}
      
}