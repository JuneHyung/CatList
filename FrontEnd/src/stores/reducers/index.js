const { combineReducers } = require("redux");

const catReducer = require('./cat');
const todoReducer = require("./todo");

module.exports = combineReducers({
  cat: catReducer,
  todo: todoReducer,
})