const express= require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/login', userController.getLogin);
router.get('/refresh', userController.getRefresh);

module.exports = router;