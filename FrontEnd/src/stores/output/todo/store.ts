import { AnyAction, Dispatch, MiddlewareAPI, createStore, compose, applyMiddleware } from "redux";
import reducer from '../../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialstate = {
  todo: {
    focusDate: '',
    curStatus: 'todo',
    todoList: [],
    editFlag: false,
    selectedItem: {todo_id: '', title:'', content:'', start:'', end:'', status: 'todo'}
  }
}

const firstMiddleware = (store: MiddlewareAPI) => (dispatch: Dispatch<AnyAction>) => (action: AnyAction) => {
  dispatch(action)
}
const thunkMiddleware = (store: MiddlewareAPI) => (dispatch: Dispatch<AnyAction>) => (action: any) => {
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

export default store;