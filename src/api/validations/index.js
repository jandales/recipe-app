const { validationResult } = require('express-validator');
const { UserChangePasswordRequestRules }  = require('./user/UserChangePasswordRequestRules')
const { UserUpdateRequestRules } =  require('./user/UserUpdateRequestRules');
const { RecipeStoreUpdateRequestRules } = require('./recipes/RecipeStoreUpdateRequestRules');
const { EmailRequestRules } = require('./auth/EmailRequestRules');
const { ConfirmationPasswordRequestRules } = require('./auth/ConfirmationPasswordRequestRules');
const { LoginRequestRules } = require('./auth/LoginRequestRules');
const { RegisterRequestRules } = require('./auth/RegisterRequestRules');
const { PasswordRequestRules } = require('./user/PasswordRequestRules');

const validateRules = (req, res, next) => {  

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({           
            errors: errors.array()
        });
    }

    next();
 
}


module.exports = {
    UserChangePasswordRequestRules,
    UserUpdateRequestRules,
    RecipeStoreUpdateRequestRules,
    EmailRequestRules,
    ConfirmationPasswordRequestRules,
    LoginRequestRules,
    RegisterRequestRules,
    PasswordRequestRules,
    validateRules
}