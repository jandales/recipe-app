const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const bcrypt = require("bcrypt");

// Load Model
const User =  require('../api/models/user');

module.exports =  (passport) => {
    // local
    passport.use(new LocalStrategy({ usernameField: 'email' },
        (email, password, done) => {       
          User.findOne({ email : email }, function (err, user) {          
            if (err) { return done(err); }
            if (!user) { return done(null, false); }           
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if(err) return done(err);
                if(!isMatch) return done(null, null);
                done(null, user);
            });        
          });
        }
    ));
    // google 
    passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async(accessToken, refreshToken, profile, done) => {  
      try {
          let user = await User.findOne({ provider_id: profile.id})

          if(user) done(null, user)

          const newUser =  {
            provider_id : profile.id,
            provider : 'google',
            name : profile.displayName, 
            image : profile.photos[0].value,           
            email : profile.emails[0].value,        
          }

          user =  await User.create(newUser);

          done(null, user);

      } catch(err) {

        console.log(err);

      }      
      
    })); 
    // facebook 
    passport.use(new FacebookStrategy({
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    },
    async(accessToken, refreshToken, profile, done) => {  
      try {
          let user = await User.findOne({ provider_id : profile.id})

          if(user) done(null, user)

          const newUser =  {
            provider_id : profile.id,
            provider : 'facebook',
            name : profile.displayName, 
            email : profile.id,   

          }

          user =  await User.create(newUser);

          done(null, user);

      } catch(err) {
        console.log(err);
      }  
    }));   
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
      User.findById(id, function (err, user) {
        done(err, user);
      });
    });
}



