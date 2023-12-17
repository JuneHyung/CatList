import { TodoInitialState } from "../../types/todo";
import {FETCH_FOCUS_DATE, FETCH_TODO_LIST, FETCH_CUR_STATUS, FETCH_TODO_EDIT_FLAG, FETCH_SELECTED_TODO_INFO}from "../constant/variable";

const initialstate:TodoInitialState = {
  focusDate: '',
  todoEditFlag: false,
  curStatus: 'todo',
  todoList: [],
  selectedTodoInfo: {todo_id: -1, title:'', content:'', start:'', end:'', status: 'todo', user_id:''}
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
      return {...prevState, todoEditFlag: action.data, selectedTodoInfo: {todo_id: -1, title:'', content:'', start:'', end:'', status: 'todo', user_id:''}};
    case FETCH_SELECTED_TODO_INFO:
      return {...prevState, selectedTodoInfo: action.data};
    default:
      return prevState
  }
}
export default todoReducer;
