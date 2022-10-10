const express = require('express');
const controller = require('../controllers/PasswordChangeController');
const { guest } = require('../middleware/auth');
const { ConfirmationPasswordRequestRules, validateRules } = require('../../api/validations/index');
const router = express.Router();

router.put('/account/password/change', guest, ConfirmationPasswordRequestRules(), validateRules,  controller.passwordChange);

module.exports = router;