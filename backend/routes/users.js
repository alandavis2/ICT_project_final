const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.post('/register', usersController.user_register);
router.post('/login', usersController.user_login);

module.exports = router;

