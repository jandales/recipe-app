const express = require('express');
const controller = require('../controllers/PasswordResetController');
const middleware = require('../middleware/auth');
const { EmailRequestRules, validateRules } = require('../../api/validations/index');
const router = express.Router();

router.post('/password/reset', 
        middleware.guest, 
        EmailRequestRules(), 
        validateRules,
        controller.sendToEmail
);

module.exports = router;