const { combineReducers } = require("redux");

const catReducer = require('./cat');

module.exports = combineReducers({
  cat: catReducer
})