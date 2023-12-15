const { Op } = require("sequelize");
const Todo = require("../models/todo");
const dayjs = require("dayjs");
const jwt = require('jsonwebtoken');

exports.getAllTodoList = async (req, res, next) => {

  const accessToken = req.headers["authorization"].split(' ')[1];
  const decoded = jwt.decode(accessToken);
  const user_id = decoded.id;

  const { todoStatus, focusDate } = req.params;

  const sDate = dayjs(focusDate).subtract(1, "M").format("YYYY-MM-DD");
  const eDate = dayjs(focusDate).add(1, "M").format("YYYY-MM-DD");

  const startDate = dayjs(sDate).startOf("M").format("YYYY-MM-DD");
  const endDate = dayjs(eDate).endOf("M").format("YYYY-MM-DD");
  if (!user_id) res.status(400).json({ code: 400, message: "Error" });
  else {
    try {
      const allTodo = await Todo.findAll({
        where: {
          [Op.and]: [
            {
              [Op.and]: [{ start: { [Op.gte]: startDate } }, { end: { [Op.lte]: endDate } }],
            },
            { status: todoStatus },
            { user_id } // user쪽 손볼때 decode해서 넣도록 수정 필요.
          ],
        },
        order: [["start", "ASC"]],
      });
      const setColorAllTodo = allTodo.map(el => {
        return {
          ...el.dataValues,
          borderColor: todoStatus === 'todo' ? '#FFFDDD' : todoStatus === 'doing' ? '#B7A684' : '#6F4E37',
          textColor: todoStatus === 'todo' ? '#6F4E37' : '#FFFDDD',
          backgroundColor: todoStatus === 'todo' ? '#FFFDDD' : todoStatus === 'doing' ? '#B7A684' : '#6F4E37'
        }
      })
      res.status(200).json(setColorAllTodo);
    } catch (err) {
      next(err);
    }
  }
};


exports.updateCurStatus = async (req, res, next) => {
  const { id, status } = req.body;
  try {
    await Todo.update(
      { status: status },
      {
        where: {
          todo_id: id,
        },
      }
    );
    res.status(200).json({ code: 200, message: "업데이트 성공!" });
  } catch (err) {
    next(err);
  }
};

exports.postTodoItem = async (req, res, next) => {

  const accessToken = req.headers["authorization"].split(' ')[1];
  const decoded = jwt.decode(accessToken);
  const user_id = decoded.id;

  const { title, content, start, end, status } = req.body;
  if (!user_id) res.status(400).json({ code: 400, message: "Error" });
  else {
    try {
      await Todo.create({
        title,
        content,
        start,
        end,
        status,
        user_id
      });
      res.status(200).json({ code: 200, message: "추가 성공!" });
    } catch (err) {
      next(err);
    }
  }
};

exports.putTodoItem = async (req, res, next) => {
  const { todo_id, title, content, start, end, status } = req.body;
  try {
    await Todo.update({
      todo_id,
      title,
      content,
      start,
      end,
      status
    }, { where: { todo_id: todo_id } });
    res.status(200).json({ code: 200, message: "추가 성공!" });
  } catch (err) {
    next(err);
  }
};


exports.deleteTodoItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Todo.destroy({ where: { todo_id: id } })
    res.status(200).json({ code: 200, message: "삭제 성공!" });
  } catch (err) { next(err) }
}