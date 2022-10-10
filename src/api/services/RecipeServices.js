const Recipe = require('../models/recipe');
const mongoose = require('mongoose');
const { populate } = require('../models/recipe');
const { upload , unlink } = require('../../helper/upload');

const PER_PAGE = process.env.PAGINATION_PERPAGE; 
const sort = { createdAt : -1 }
const populateUser = { path : 'user',  select : ['name', 'email', 'image', 'provider', 'provider_id']} 

module.exports = class RecipeServices {

    static async all (page) {          
        const res = await Recipe.find( { status : 'public' } )
                                .sort(sort)
                                .populate(populateUser)        
                                .limit(PER_PAGE)
                                .skip(page);
        return res;
    }

    static async findByUserId (id, page = 0) {       
        const res = await Recipe.find({ 'user' : id  })
                                .sort(sort)                
                                .limit(PER_PAGE)
                                .skip(page);
        return res;
    }

    static  async getSavedRecipes (user_id, page = 0) {
        const res = await Recipe.find({ saved : user_id })
                                .sort(sort)       
                                .limit(PER_PAGE)
                                .skip(page);
        return res;
    }

    static async store (req) {
  
        if (req.files && Object.keys(req.files).length > 0) { 
            req.body.image = upload(req.files.image, 'recipe'); 
        }

        let user = req.user.id;
        req.body = {...req.body, user}
        let recipe  = new Recipe(req.body);
        recipe = await recipe.save();
        return recipe;
    }

    static async update (id, req) {  
        
        if (req.files && Object.keys(req.files).length > 0) { 
            let path =  upload(req.files.image, 'recipe');  
            req.body.image = path;          
        }  
        const recipe = await Recipe.findByIdAndUpdate(id, req.body);   
        unlink(recipe.image);
        return recipe;
    }

    static async delete (user_id, recipe_id) {

        let recipe = await Recipe.findById(recipe_id);
      
        if (user_id != recipe.user) return false;

        await Recipe.findByIdAndDelete(recipe_id);

        return true
    }    

    static async findOne (params) {
        const res = await Recipe.findOne(params);    
        return res;
    }

    static async findById (id) {
        let _id = mongoose.Types.ObjectId(id);
        const res = await Recipe.findById(_id).populate(populateUser); 
        return res;
    }

    static async findByName (name) {
        const res = await Recipe.findOne( {name : name }).populate(populateUser)   ; 
        return res;
    }    

    static async getRecipeUserCount(id) {
        const res = await Recipe.find({'user' : id}).count(); 
        return res;
    }

    static async getSavedCount(user_id) {
        const res = await this.getSavedRecipes(user_id);        
        return res.length;
    }

    static async search (keyword) {
        
        const res = await Recipe.find( { name : { $regex : `^${keyword}.*` , $options: 'i' } } )
                                .populate(populateUser)
                                .sort(sort)       
                                .limit(PER_PAGE)
        return res;
    }

    static async updateSavedRecipes(recipe_id, user_id){

        let users = [];

        let recipe = await RecipeServices.findOne({ _id : recipe_id, saved : user_id });    
      
        if (recipe) {           
            users = recipe.saved.filter((user) => {
                return user_id != user;
            }); 
        
        }  else {
            users = [...users, user_id];
        } 

        recipe = await Recipe.findByIdAndUpdate(recipe_id, { saved : users }, { returnOriginal: false}).populate(populateUser);

        return recipe;
    }

}