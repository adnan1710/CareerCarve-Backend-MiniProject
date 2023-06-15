const express = require('express');
const router = express.Router();
const welcomeController = require('../controllers/welcomeController');

router.get('/', welcomeController.getWelcomeMessage);

module.exports = router;
