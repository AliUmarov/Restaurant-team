const { Router } = require('express');
const router = Router();

const { usersController } = require('../controllers/users.controller');

router.get('/', usersController.getAllUsers);
router.post('/regist', usersController.registerUser);
router.post('/login', usersController.login);

module.exports = router;