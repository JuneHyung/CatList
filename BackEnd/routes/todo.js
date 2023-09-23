const express= require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

router.get('/search/:todoStatus/:focusDate', todoController.getAllTodoList);
router.put('/status', todoController.updateCurStatus);

module.exports = router;