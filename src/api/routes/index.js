const express = require('express');
const router = express.Router();

router.use('/api', require('./recipes'))
router.use('/api', require('./login'))
router.use('/api', require('./register'))
router.use('/api', require('./logout'));
router.use('/api', require('./user'));
router.use('/api', require('./password.reset'));
router.use('/api', require('./password.change'));

module.exports = router;