import {combineReducers} from 'redux';
import catReducer from './cat';
import todoReducer from './todo';

const reducer = combineReducers({
  cat: catReducer,
  todo: todoReducer,
})

export type RootState = ReturnType<typeof reducer>;
export default reducer;