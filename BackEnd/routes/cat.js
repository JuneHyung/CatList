const express= require('express');
const router = express.Router();
const catController = require('../controllers/cat');

router.get('/search/:keyword', catController.getAllCatsByKeyword);
router.get('/kind/:kindCode', catController.getAllCatsByKind);

module.exports = router;