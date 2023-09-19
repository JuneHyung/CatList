const { Op } = require('sequelize');
const Todo = require('../models/todo');
const dayjs = require('dayjs');

exports.getAllTodoList = async (req, res, next) => {
  const {todoStatus, focusDate} = req.params;
  console.log(todoStatus, focusDate)

  const sDate = dayjs(focusDate).subtract(1, 'M').format('YYYY-MM-DD')
  const eDate = dayjs(focusDate).add(1, 'M').format('YYYY-MM-DD')

  const startDate = dayjs(sDate).startOf('M').format('YYYY-MM-DD')
  const endDate = dayjs(eDate).endOf('M').format('YYYY-MM-DD')
  try{
    const allTodo = await Todo.findAll({
      where:{
        [Op.and]: [
          {
            [Op.or]: [
              { start: { [Op.gte]: startDate }},
              { end: { [Op.lte]: endDate }},
            ]
          },
          {status: todoStatus}
        ]
      },
    });
  
    res.status(200).json(allTodo);
  }catch(err){
    next(err)
  }
}