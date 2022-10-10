const express = require('express');
const router = express.Router();

const  { isAuthenticated } = require('../middleware/auth');

router.post('/logout', isAuthenticated, (req, res)  => {    
       req.logout(function(err) {
        if (err) { return next(err); }
        res.status(200).json({ message : 'Successfully logout'});
      });
});





module.exports = router;