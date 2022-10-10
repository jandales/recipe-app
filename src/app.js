const express = require('express');
const path = require('path');
const app = express();
// app config
app.use(require('./config/index'));
// router middleware
app.use(require('./api/routes/index'));

if (process.env.NODE_ENV === 'production') { 
    app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, '..', '/public/index.html')))
}

app.listen(process.env.PORT || 3001,  () => {  
  console.log(`app is running on port ${process.env.PORT}`);
});
