const express = require('express');
const loginController = require('../controllers/LoginController');
const passport =  require('passport');
const router = express.Router();
const  { guest } = require('../middleware/auth');
const { LoginRequestRules , validateRules } = require('../../api/validations/index');


const responseUser = (req, res) => { 
    if (!req.user)  return res.status(403).json({ message : 'Invalid Credentails'}); 
    res.status(200).json(req.user);
}

const responseSocialUser = (req, res) => {   
    if (!req.user) res.status(401).json({ message : 'Invalid Credentails'}); 
    res.redirect(process.env.APP_URL);    
}

router.post('/auth/login', 
    guest, 
    LoginRequestRules(),
    validateRules,
    passport.authenticate('local'),
    responseUser
);

router.get('/auth/google', 
    guest, 
    passport.authenticate('google', { scope: ['profile','email'] })
) 

router.get('/auth/google/callback', 
    guest, 
    passport.authenticate('google', { failureRedirect: '/auth/login' }), 
    responseSocialUser
);

router.get('/auth/facebook', 
    guest, 
    passport.authenticate('facebook', {scope : ['email', 'user_location']})
);

router.get('/auth/facebook/callback',
    guest, 
    passport.authenticate('facebook', { failureRedirect: '/auth/login' }), 
    responseSocialUser
);

module.exports = router;