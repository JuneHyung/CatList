import { TodoInitialState } from "../../types/todo";
import {FETCH_FOCUS_DATE, FETCH_TODO_LIST, FETCH_CUR_STATUS, FETCH_TODO_EDIT_FLAG, FETCH_TODO_SELECTED_ITEM}from "../constant/variable";

const initialstate:TodoInitialState = {
  focusDate: '',
  todoEditFlag: false,
  curStatus: 'todo',
  todoList: [],
  todoSelectedItem: {todo_id: '', title:'', content:'', start:'', end:'', status: 'todo', user_id:''}
}

const todoReducer = (prevState = initialstate, action : any) =>{
  // console.log(action.type, action.data)
  switch(action.type){
    case FETCH_FOCUS_DATE:
      return {...prevState, focusDate: action.data};
    case FETCH_CUR_STATUS:
      return {...prevState, curStatus: action.data};
    case FETCH_TODO_LIST:
      return {...prevState, todoList: action.data};
    case FETCH_TODO_EDIT_FLAG:
      return {...prevState, todoEditFlag: action.data, todoSelectedItem: {todo_id: '', title:'', content:'', start:'', end:'', status: 'todo', user_id:''}};
    case FETCH_TODO_SELECTED_ITEM:
      return {...prevState, todoSelectedItem: action.data};
    default:
      return prevState
  }
}
export default todoReducer;
