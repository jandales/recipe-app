const mongoose = require('mongoose')
const RecipeServices = require('../services/RecipeServices');

const index = async (req, res) => {
  const page = req.query.page || 0;
  const recipes = await RecipeServices.all(page);  
  res.status(200).json(recipes);  
}

const recepiByUser = async (req,res) => { 
    let _id = req.params.id;
    let _page = req.query.page || 0;    
    const isValid = mongoose.Types.ObjectId.isValid(_id);
    if (!isValid) return res.status(400).json({ message: 'Invalid user id' });
    const isOwner = req.isAuthenticated?.() && String(req.user.id) === String(_id);
    const recipes = await RecipeServices.findByUserId(_id, _page, { publicOnly: !isOwner }); 
    res.status(200).json(recipes);    
}

const show = async (req,res) => {

    try {       
        let recipe = await RecipeServices.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

        const ownerId = recipe.user?._id || recipe.user;
        const isOwner = req.isAuthenticated?.() && String(req.user.id) === String(ownerId);
        if (recipe.status === 'private' && !isOwner) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.status(200).json(recipe).end();
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Could not load recipe' });
    }
   

}
 
const store = async (req,res) => {  
  
    try {       
        let recipe = await RecipeServices.store(req);
        res.status(200).json({ recipe, message : "Successfully created" }); 
    } catch(err) {
        console.log(err);
    }   

}

const update = async (req,res) => {      
    try { 
        const recipe = await RecipeServices.update(req.params.id, req);
        if (!recipe) res.status(404).json({message : 'recipe not found'});       
        res.status(200).json(recipe);
    } catch (err) {
        console.log(err);
    }  
}

const destroy = async (req,res) => {  
 
   try {   
        const response = await RecipeServices.delete(req.user.id, req.params.id);
        if(!response) return res.status(401).json( {message : 'unauthorized'});
        res.status(200).json( {message : 'successfully deleted'});
   } catch (err) {
        console.log(err);        
   }
   
}

const recipeSave = async (req, res) => {

    try { 
        recipe = await RecipeServices.updateSavedRecipes(req.params.id,req.user.id);
        res.status(200).json(recipe);
    } catch (err) {
        console.log(err);
    }
  
}

const getSavedRecipes = async (req,res) => {  
    let _page = req.query.page || 0;
    let _id = req.user.id;
    try {
        let recipe = await RecipeServices.getSavedRecipes(_id, _page); 
        res.status(200).json(recipe);
    } catch (err) {
        console.log(err);
    }   
}

const search = async (req,res) => {
    const keyword = req.params.keyword;  
    try {
        let recipes = await RecipeServices.search(keyword);
        res.status(200).json(recipes).end();
    } catch (err) {
        console.log(err);
    }
}



module.exports = {
    index,   
    show,
    store,
    update,
    destroy,
    recepiByUser,
    recipeSave,
    getSavedRecipes,
    search,
}