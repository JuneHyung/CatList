const express= require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

router.get('/:todoStatus', todoController.getAllTodoList);

module.exports = router;