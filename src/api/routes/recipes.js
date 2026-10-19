const express = require('express');
const router = express.Router();
const controller = require('../controllers/RecipeController');
const middleware = require('../middleware/auth');
const validate = require('../validations/index');
const recipePermission = require('../permissions/recipes/index');

router.get('/recipes',
            controller.index);

router.get('/recipes/search/:keyword',
            controller.search);

router.get('/recipe/:id',
            controller.show);

router.post('/recipe/store', 
            middleware.isAuthenticated,
            validate.RecipeStoreUpdateRequestRules(),
            validate.validateRules,
            controller.store);

router.put('/recipe/update/:id',  
            middleware.isAuthenticated,
            recipePermission.canUpdate,
            validate.RecipeStoreUpdateRequestRules(),
            validate.validateRules,
            controller.update);

router.delete('/recipe/destroy/:id',
            middleware.isAuthenticated,
            controller.destroy);

router.get('/recipes/saved/user/:id',
            middleware.isAuthenticated,
            controller.getSavedRecipes);

router.put('/recipes/:id/saved',  
            middleware.isAuthenticated,
            controller.recipeSave);

router.get('/recipes/user/:id',           
            controller.recepiByUser);


        


module.exports = router;