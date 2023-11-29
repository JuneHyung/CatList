import {combineReducers} from 'redux';
import catReducer from './cat';
import todoReducer from './todo';
import userReducer from './user';

const reducer = combineReducers({
  cat: catReducer,
  todo: todoReducer,
  user: userReducer
})

export type RootState = ReturnType<typeof reducer>;
export default reducer;