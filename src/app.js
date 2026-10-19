const express = require('express');
const path = require('path');
const app = express();

if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1);
}

// app config
app.use(require('./config/index'));
// router middleware
app.use(require('./api/routes/index'));

// SPA fallback: serve index.html for client-side routes (e.g. /register)
app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});
