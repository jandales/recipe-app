const { body } = require('express-validator');

module.exports =  {
 UserUpdateRequestRules : () => {
    return [
        body('name')
            .not().isEmpty()
            .withMessage('Name field is required'),          

        body('phone')
            .not().isEmpty() 
            .withMessage('Phone field is required')   
            .isNumeric() 
            .withMessage('Phone must a numeric!'),              
   ]
}
 
}


