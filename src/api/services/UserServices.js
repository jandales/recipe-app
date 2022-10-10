const User = require('../models/user');
const mongoose = require('mongoose')
const Recipe = require('../models/recipe');
const RecipeServices = require('../services/RecipeServices');
const { cryptpassword, comparePassword } = require('../../helper/encrytpassword');
const { upload , unlink } = require('../../helper/upload');

const projection = { name: 1, email : 1, image : 1, phone : 1, bio : 1, provider : 1, provider_id : 1};

module.exports = class UserServices {
    static async auth(id) {
        
        let _id = mongoose.Types.ObjectId(id); 

        const isValid = mongoose.Types.ObjectId.isValid(_id);

        if (!isValid) return null;
    
        let user = await User.findById(_id, projection) 

        return user;
    }
    static async getInfo(id) {

        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) return null;

        let user = await User.findById(id, projection);
        if (!user) return;

        const recipes_count = await RecipeServices.getRecipeUserCount(id);        
        const recipes_saved_count= await RecipeServices.getSavedCount(id); 

        user = {...user._doc, recipes_count, recipes_saved_count}  

        return user;
    }

    static async getUser(id) {

        let _id = mongoose.Types.ObjectId(id);

        const isValid = mongoose.Types.ObjectId.isValid(_id);

        if (!isValid) return null;

        let user = await User.findById(_id, projection)

        return user;

    }
    static async update(id, body) {
       
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) return null;  

        let _id = mongoose.Types.ObjectId(id);

        let user = await User.findByIdAndUpdate(_id, body, { returnOriginal : false })        
        return user;
    }
    static async updatePassword(user, body) { 

        let { new_password,  password } = body;       

        let validPassword = await comparePassword(password, user.password)

        if(!validPassword) return { code : 401, message : 'invalid credentials'}; 

        const hashpassword = await cryptpassword(new_password);          

        let _id = mongoose.Types.ObjectId(user.id);

        await User.findByIdAndUpdate(_id, {password :  hashpassword});

        return { code : 200, message : 'Successfully Password Updated'  }; 

    }
    static async uploadAvatar(id, files) {

        if (!files && Object.keys(files).length == 0) return;

        mongoose.Types.ObjectId(id);
        let path = upload(files.image, 'avatar');
        const user = await User.findByIdAndUpdate(id, { image : path }, { returnOriginal: false } ); 
        return user;   
    }

    static async removeAvatar(id, image)  {
        
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) return null;
        unlink(image); 
        let _id = mongoose.Types.ObjectId(id);  
        const user = await User.findByIdAndUpdate(_id, { image : null }, {returnOriginal: false});
        return user;
    }

    static async deleteAccount(id) {
        let _id = mongoose.Types.ObjectId(id);
        await Recipe.deleteMany({'user' : _id})
        await User.findByIdAndDelete(_id);
        return true;
    }

    static async findOne(params) {
        const res = await Recipe.findOne(params);    
        return res;
    }

    static async confirmDelete(user_id, password){
        const user = await User.findOne({_id : user_id });
        let validPassword = await comparePassword(password, user.password)
        if (validPassword) return true;
        return false;
    }



    static async findByEmail(email) {
        const res = await Recipe.findOne( {email : email }); 
        return res;
    }  

}