const cors = require('cors');

module.exports = cors({credentials: true, origin: [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    'https://etto-recipe-app.herokuapp.com'
]});