const Todo = require('../models/todo');

exports.getAllTodoList = async (req, res, next) => {
  const {todoStatus} = req.params;
  try{
    const allTodo = await Todo.findAll({
      where:{
        status: todoStatus
      }
    });
    res.status(200).json(allTodo);
  }catch(err){
    next(err)
  }
}