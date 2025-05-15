const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users/loginCheck', userController.loginCheck)
router.post('/users/register', userController.createUser)
router.get('/users/getUser/:accountId', auth, userController.getOneUserByID)


module.exports = router;
