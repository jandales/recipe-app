const { body } = require('express-validator');

module.exports =  {
  EmailRequestRules : () => {
    return [
        body('email')
            .not().isEmpty()
            .withMessage('Email field is required')
            .isEmail()
            .withMessage('Email must be valid'),
    ]
  }
}


