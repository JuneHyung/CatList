const express= require('express');
const router = express.Router();
const catController = require('../controllers/cat');

router.get('/search/', catController.getAllCatsByKeyword);
router.get('/kind', catController.getAllCatsByKind);

module.exports = router;