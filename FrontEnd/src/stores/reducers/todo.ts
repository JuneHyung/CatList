const { CLEAR_FOCUS_DATE, CLEAR_TODO_LIST, FETCH_FOCUS_DATE, FETCH_TODO_LIST, FETCH_CUR_STATUS, FETCH_EDIT_FLAG, FETCH_SELECTED_ITEM } = require("../constant/variable");

const initialstate = {
  focusDate: '',
  editFlag: false,
  curStatus: 'todo',
  todoList: [],
  selectedItem: {todo_id: '', title:'', content:'', start:'', end:'', status: 'todo'}
}

const todoReducer = (prevState = initialstate, action : any) =>{
  // console.log(action.type, action.data)
  switch(action.type){
    case CLEAR_FOCUS_DATE:
      return {...prevState, focusDate: ''};
    case CLEAR_TODO_LIST:
      return {...prevState, todoList: []};
    case FETCH_FOCUS_DATE:
      return {...prevState, focusDate: action.data};
    case FETCH_CUR_STATUS:
      return {...prevState, curStatus: action.data};
    case FETCH_TODO_LIST:
      return {...prevState, todoList: action.data};
    case FETCH_EDIT_FLAG:
      return {...prevState, editFlag: action.data, selectedItem: {todo_id: '', title:'', content:'', start:'', end:'', status: 'todo'}};
    case FETCH_SELECTED_ITEM:
      return {...prevState, selectedItem: action.data};
    default:
      return prevState
  }
}
export default todoReducer;
