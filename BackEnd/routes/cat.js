const express= require('express');
const router = express.Router();
const catController = require('../controllers/cat');

router.get('/kind/:kindCode', catController.getAllCatsByKind);
router.get('/serach/:keyword', catController.getAllCatsByKind);

module.exports = router;