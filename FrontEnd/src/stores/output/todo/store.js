const { createStore, compose, applyMiddleware } = require("redux");
const reducer = require('../../reducers');
const { composeWithDevTools } = require('redux-devtools-extension');
const initialstate = {
  todo: {
    focusDate: '',
    curStatus: 'todo',
    todoList: [],
  }
}

const firstMiddleware = (store) => (dispatch) => (action) => {
  dispatch(action)
}
const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return dispatch(action)
}

const enhancer = process.env.NODE_ENV === 'production'
  ? compose(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware,
    ),
  )
  : composeWithDevTools(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware,
    ),
  );

const store = createStore(reducer, initialstate, enhancer);

module.exports = store;