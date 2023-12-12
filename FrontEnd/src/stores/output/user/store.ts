import { AnyAction, Dispatch, MiddlewareAPI, legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import reducer from '../../reducers/user';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialstate = {
  isLogin: false,
  userName: ''
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