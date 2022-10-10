const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const logger = require('morgan')
const fileUpload = require('express-fileupload')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const morgan = require('morgan');
var bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api/routes/index');

require('dotenv').config({path : path.resolve(__dirname, '..', '.env')});


const connectDB = require('./database/index');

const passport = require('passport');

require('./config/passport')(passport)

const app =  express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

connectDB();

app.use(morgan('dev'));

app.use(function(req, res, next) {  
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'node_modules')));
app.use(logger('dev'))
app.use(cors({credentials: true, origin: ['http://127.0.0.1:3000', 'http://localhost:3000', 'https://etto-recipe-app.herokuapp.com' ]}))

app.use(fileUpload({
    createParentPath :  true,
}))

// express-session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true, 
    store: MongoStore.create({mongoUrl: process.env.DB_URL}),
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use(routes);

if (process.env.NODE_ENV === 'production') { 
    app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, '..', '/public/index.html')))
}

app.listen(process.env.PORT || 3001,  () => {  
  console.log(`app is running on port ${process.env.PORT}`);
});
