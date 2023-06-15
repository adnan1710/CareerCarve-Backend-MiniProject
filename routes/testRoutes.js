const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');

router.post('/submit-test', testController.submitTest);

module.exports = router;
