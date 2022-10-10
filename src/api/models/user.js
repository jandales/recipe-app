const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


const  SALT_WORK_FACTOR = 10;


const userSchema =  new Schema({

    provider_id : {
        type : String,      
    },
    provider : {
        type : String,        
    },
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        unique :  true,
        required : true,
    },
    password : {
        type : String,
        required : false,
    }, 
    password_reset_token : {
        type : String,
        required : false,
    },
    token_created_at : {
        type : Date,
        required : false,
    },
    image : {
        type : String,
    },
    phone : {
        type : String,
        required : false,
    },
    bio : {
        type : String,
        required : false,
    }
}, { timestamps : true });


userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});


const User = mongoose.model('User', userSchema);

module.exports = User;