import { deleteTodoItem, getAllTodoList, postTodoItem, putTodoItem, putTodoItemStatus } from "../../api/todo";
import { FetchCurStatusAction, FetchFocusDateAction, FetchTodoEditFlagAction, FetchTodoListAction, FetchSelectedTodoInfoAction, ThunkAction} from "../../types/action";
import { PutTodoItemStatusRequestBody, TodoItem, TodoItemRequestBody, TodoList, todoStatus } from "../../types/todo";
import { FETCH_FOCUS_DATE, FETCH_TODO_LIST, FETCH_CUR_STATUS, FETCH_TODO_EDIT_FLAG, FETCH_SELECTED_TODO_INFO } from "../constant/variable"

// status와 focusDate로 해당상태의 날짜에 todoList목록들을 가져와 TodoList 세팅
// api조회 후 리스트 재조회 시 focusDate 다시 세팅필요없다 생각해 fetchFocusDate 추가 X.
// 달력 날짜 이동 시 todoEditFlag취소되지않기 위해 todoEditFlag변경 X.
export const setTodoList = (status: todoStatus, focusDate:string): ThunkAction => {
  return async (dispatch, getState) =>{
    try{
      const data = await getAllTodoList(status, focusDate);
      dispatch(fetchTodoList(data));
    }catch(e){
      console.log(e);
    }
  }
}

// calendar클릭 시 focusDate 변경
export const setFocusDate = (date: string): ThunkAction => {
  return async (dispatch) => {
    dispatch(fetchFocusDate(date));
  }
}

// todo, doning, done 중 하나로 현재 상태 세팅.
export const setCurStatus = (status: todoStatus): ThunkAction => {
  return async (dispatch) => {dispatch(fetchCurStatus(status))}
}

// detail을 보기위한 selectedItem변경
export const setSelectedTodoInfo = (info: TodoItem): ThunkAction => {
  return async (dispatch) => {
    console.log(info)
    dispatch(fetchSelectedTodoInfo(info));
  }
}

// EditFlag 변경
// selectedItem 초기화까지 진행.
export const toggleEditFlag = (status: boolean): ThunkAction => {
  return async (dispatch) => {dispatch(fetchTodoEditFlag(status))}
}

// 기존 이템의 status변경
export const putCurItemStatus = (body:PutTodoItemStatusRequestBody): ThunkAction => {
  return async (dispatch, getState) => {
    const {code, message} = await putTodoItemStatus(body);
    if(code===200){
      const {curStatus, focusDate} = getState().todo
      console.log(message);
      dispatch(setTodoList(curStatus, focusDate))
    }
  }
}

// 새로운 TodoItem 추가.
export const postNewTodoItem = (body: TodoItemRequestBody): ThunkAction =>{
  return async (dispatch, getState) =>{
    const {code, message} = await postTodoItem(body);
    if(code===200){
      console.log(message);
      const {curStatus, focusDate} = getState().todo
      dispatch(toggleEditFlag(false))
      dispatch(setTodoList(curStatus, focusDate))
    }
  }
}

// TodoItem 전체 수정
export const putCurTodoItem = (body: TodoItemRequestBody): ThunkAction =>{
  return async (dispatch, getState) =>{
    const {code, message} = await putTodoItem(body);
    if(code===200){
      console.log(message);
      const {curStatus, focusDate} = getState().todo
      dispatch(toggleEditFlag(false))
      dispatch(setTodoList(curStatus, focusDate))
    }
  }
}

// TodoItem 삭제
export const deleteSelectedTodoInfo = (id: number): ThunkAction => {
  return async (dispatch, getState) => {
    const {code, message} = await deleteTodoItem(id);
    if(code===200){
      console.log(message);
      const {curStatus, focusDate} = getState().todo
      dispatch(setTodoList(curStatus, focusDate))
    }
  }
}


// Actions
const fetchFocusDate = (data: string): FetchFocusDateAction => {
  return {
    type: FETCH_FOCUS_DATE,
    data,
  }
}

const fetchTodoList = (data: TodoList): FetchTodoListAction =>{
  return {
    type: FETCH_TODO_LIST,
    data,
  }
}

const fetchCurStatus = (data: todoStatus): FetchCurStatusAction =>{
  return {
    type: FETCH_CUR_STATUS,
    data,
  }
}
const fetchTodoEditFlag = (data: boolean): FetchTodoEditFlagAction =>{
  return {
    type: FETCH_TODO_EDIT_FLAG,
    data,
  }
}
const fetchSelectedTodoInfo = (data: TodoItem): FetchSelectedTodoInfoAction =>{
  return {
    type: FETCH_SELECTED_TODO_INFO,
    data,
  }
}