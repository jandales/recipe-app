const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

const isProduction = process.env.NODE_ENV === 'production';

const sessions = session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: true,
    saveUninitialized: true,
    proxy: isProduction,
    cookie: {
        secure: isProduction,
        sameSite: isProduction ? 'lax' : 'lax',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    store: MongoStore.create({
        mongoUrl: process.env.DB_URL,
    }),
});

module.exports = sessions;
