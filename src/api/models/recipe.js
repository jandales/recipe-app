const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name : {
       type : String,
       required : 'Name is required',
    },
    description : {
        type : String,
        required : 'Description is required',
    },
    image : {
        type : String,      
    },
    ingredients : {
        type : Array,
        required : 'Ingredients is required',
    },
    instructions : {
        type : Array,
        required : 'Instructions is required',
    },
    status : {
        type : String,
        required : 'Status is required',
    },
    cookTime : {
        type : String,
        default : '',
    },
    prepTime : {
        type : String,
        default : '',
    },
    difficulty : {
        type : String,
        default : '',
    },
    servings : {
        type : String,
        default : '',
    },
    saved : {
        type: Array,       
    },
    user :{ 
        type : mongoose.Schema.Types.ObjectId, ref : 'User',
        required : 'User is required'
    },  
    
}, { timestamps : true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
