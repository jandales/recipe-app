const Recipe = require('../models/recipe');
const mongoose = require('mongoose');
const { populate } = require('../models/recipe');
const { upload , unlink } = require('../../helper/upload');

const PER_PAGE = Number(process.env.PAGINATION_PERPAGE) || 50; 
const sort = { createdAt : -1 }
const populateUser = { path : 'user',  select : ['name', 'email', 'image', 'provider', 'provider_id']} 

function parseMaybeJsonArray(value) {
    if (Array.isArray(value)) return value.filter(Boolean);
    if (typeof value === 'string') {
        try {
            const parsed = JSON.parse(value);
            if (Array.isArray(parsed)) return parsed.filter(Boolean);
        } catch (_) {
            // fall through — treat as a single line
        }
        return value.trim() ? [value.trim()] : [];
    }
    return [];
}

function normalizeRecipeBody(body = {}) {
    const next = { ...body };
    if (next.ingredients !== undefined) {
        next.ingredients = parseMaybeJsonArray(next.ingredients);
    }
    if (next.instructions !== undefined) {
        next.instructions = parseMaybeJsonArray(next.instructions);
    }
    // Keep recipe meta fields as plain strings
    ['cookTime', 'prepTime', 'difficulty', 'servings', 'name', 'description', 'status'].forEach((key) => {
        if (next[key] !== undefined && next[key] !== null) {
            next[key] = String(next[key]).trim();
        }
    });
    return next;
}

module.exports = class RecipeServices {

    static async all (page) {          
        const res = await Recipe.find( { status : 'public' } )
                                .sort(sort)
                                .populate(populateUser)        
                                .limit(PER_PAGE)
                                .skip(Number(page) || 0);
        return res;
    }

    static async findByUserId (id, page = 0, options = {}) {       
        const filter = { user: id };
        if (options.publicOnly) filter.status = 'public';
        const res = await Recipe.find(filter)
                                .sort(sort)
                                .populate(populateUser)
                                .limit(PER_PAGE)
                                .skip(Number(page) || 0);
        return res;
    }

    static  async getSavedRecipes (user_id, page = 0) {
        const res = await Recipe.find({ saved : user_id })
                                .sort(sort)
                                .populate(populateUser)
                                .limit(PER_PAGE)
                                .skip(Number(page) || 0);
        return res;
    }

    static async store (req) {
        const body = normalizeRecipeBody(req.body || {});
        if (req.files && Object.keys(req.files).length > 0 && req.files.image) { 
            body.image = upload(req.files.image, 'recipe'); 
        }

        const recipe = await new Recipe({
            name: body.name,
            description: body.description,
            status: body.status || 'public',
            ingredients: body.ingredients || [],
            instructions: body.instructions || [],
            cookTime: body.cookTime || '',
            prepTime: body.prepTime || '',
            difficulty: body.difficulty || '',
            servings: body.servings || '',
            image: body.image || '',
            user: req.user.id,
            saved: [],
        }).save();
        return recipe;
    }

    static async update (id, req) {  
        const existing = await Recipe.findById(id);
        if (!existing) return null;

        const body = normalizeRecipeBody(req.body || {});
        const hasNewImage = !!(req.files && req.files.image && req.files.image.name);

        const update = {
            name: body.name,
            description: body.description,
            status: body.status,
            ingredients: body.ingredients,
            instructions: body.instructions,
            cookTime: body.cookTime ?? existing.cookTime ?? '',
            prepTime: body.prepTime ?? existing.prepTime ?? '',
            difficulty: body.difficulty ?? existing.difficulty ?? '',
            servings: body.servings ?? existing.servings ?? '',
            // Always keep the current image unless a new file is uploaded
            image: existing.image || '',
        };

        if (hasNewImage) { 
            const previousImage = existing.image;
            update.image = upload(req.files.image, 'recipe');
            if (previousImage && previousImage !== update.image) {
                unlink(previousImage);
            }
        }

        const recipe = await Recipe.findByIdAndUpdate(id, { $set: update }, {
            new: true,
            runValidators: true,
        }).populate(populateUser);
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
        
        const res = await Recipe.find({
                                    status: 'public',
                                    name: { $regex: `^${keyword}.*`, $options: 'i' },
                                })
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