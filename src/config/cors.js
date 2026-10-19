const cors = require('cors');

const allowedOrigins = [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    'http://127.0.0.1:3001',
    'http://localhost:3001',
    'https://recipe-app-7hga.onrender.com',
    'https://etto-recipe-app.herokuapp.com',
];

module.exports = cors({
    credentials: true,
    origin: function (origin, callback) {
        // Allow same-origin / non-browser requests (no Origin header)
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error(`Not allowed by CORS: ${origin}`));
    },
});
