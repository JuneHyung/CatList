const express= require('express');
const router = express.Router();
const charcController = require('../controllers/charc');

router.get('/search/:charcId', charcController.getCatCharcByCharcId);

module.exports = router;