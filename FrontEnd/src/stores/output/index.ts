import { MiddlewareAPI, Dispatch, AnyAction, compose, applyMiddleware, legacy_createStore as createStore } from "redux";
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CatInitialState } from "../../types/cat";
import { TodoInitialState } from "../../types/todo";
const catInitialState: CatInitialState = {
    catList: [],
    catKindList: [],
    lastKeyword: '',
    selectedKindName: '',
    selectedKindCode: '',
    curPage: 1,
    selectedCat: {
      cat_code: -1,
      cat_name: '',
      cat_age: 0,
      kind_code: '',
      description: '',
      create_date: '',
      profile: '',
      address: '',
      charc_id: '',
      see: 0,
      kind_name: '',
      kind_profile: '',
      user_id: '',
    },
    selectedCharc: {
      charc_id: "",
      curious: 0,
      extrovert: 0,
      friendly: 0,
      independence: 0,
      introvert: 0,
      tranquil: 0
    },
    isEndData: false,
    isLoading: false,
    editFlag: false
}
const todoInitialState:TodoInitialState = {
  focusDate: '',
  curStatus: 'todo',
  todoList: [],
  todoEditFlag: false,
  todoSelectedItem: {todo_id: '', title:'', content:'', start:'', end:'', status: 'todo', user_id: '',}
}
const userInitialState = {
  isLogin: false,
  userName: ''
}
const initialState = {
  cat: catInitialState,
  todo: todoInitialState,
  user: userInitialState
}
const firstMiddleware = (store: MiddlewareAPI) => (dispatch: Dispatch<AnyAction>) => (action: AnyAction) => {
  dispatch(action)
}
const thunkMiddleware = (store:MiddlewareAPI) => (dispatch:Dispatch<AnyAction>) => (action: any) => {
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

const store = createStore(reducer, initialState, enhancer);


export default store;