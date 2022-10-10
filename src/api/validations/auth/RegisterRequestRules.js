const { body } = require('express-validator');

module.exports =  {
  RegisterRequestRules : () => {
    return [  
        
        body('name')
            .not().isEmpty()
            .withMessage('Name field is required'),    

        body('email')
            .not().isEmpty()
            .withMessage('Email field is required')
            .isEmail()
            .withMessage('Email must be valid'),

        body('password')
            .not().isEmpty()
            .withMessage('Password field is required')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 chars long'), 
    ]
  }
}