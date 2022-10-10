const { body } = require('express-validator');

module.exports =  {
  LoginRequestRules : () => {
    return [        
        body('email')
            .not().isEmpty()
            .withMessage('Email field is required')
            .isEmail()
            .withMessage('Email must be valid'),

        body('password')
            .not().isEmpty()
            .withMessage('Password field is required')
    ]
  }
}


