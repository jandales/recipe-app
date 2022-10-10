
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
require('dotenv').config({path : path.resolve(__dirname, '..', '..','.env')});
// express-session middleware

const sessions =  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true, 
    store: MongoStore.create({mongoUrl: process.env.DB_URL}),
})


module.exports = sessions;
