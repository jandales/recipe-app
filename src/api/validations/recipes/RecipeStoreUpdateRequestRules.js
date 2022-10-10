const { body } = require('express-validator');


module.exports = {

 RecipeStoreUpdateRequestRules : () => {

   return [

        body('name')
            .not().isEmpty()
            .withMessage('Name is required'),

        body('description')
            .not().isEmpty()
            .withMessage('Description is required'),
            
        // body('ingredients')
        //     .custom( (item,  {req}) => {
        //         console.log(item);
        //     })
        //     .withMessage('ingredients atleast one item'),

        // body('instructions')
        //     .custom( (item) =>_.isArray(item) && item.length == 0)
        //     .withMessage('instructions must atleast one'),

   ]

}





}