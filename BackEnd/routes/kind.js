const express= require('express');
const router = express.Router();
const kindController = require('../controllers/kind');

router.get('/', kindController.getAllKind);

module.exports = router;