const express = require('express')
const passport = require('passport')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
//env
require('dotenv').config({path : path.resolve(__dirname, '..', '.env')});

app.use(logger('dev'))
app.use(require('./sessions'))
app.use(require('./staticFiles'))
app.use(require('./cors'))
app.use(require('./express-fileupload'))
//passport
require('./passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const connectDB = require('../database/index');
//connect to database
connectDB();

module.exports = app;