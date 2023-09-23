const express= require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

router.get('/search/:todoStatus/:focusDate', todoController.getAllTodoList);
router.put('/status', todoController.updateCurStatus);
router.delete('/item/:id', todoController.deleteTodoItem);
router.post('/item', todoController.postTodoItem);

module.exports = router;