const express = require('express');
const controller = require('../controllers/RegisterController');
const  { guest } = require('../middleware/auth');
const { RegisterRequestRules , validateRules } = require('../../api/validations/index');
const router = express.Router();

const { register } = controller;

router.post('/register/store', guest, RegisterRequestRules(), validateRules,  register);

module.exports = router;