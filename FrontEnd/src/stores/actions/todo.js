import { deleteTodoItem, getAllTodoList, putTodoItemStatus } from "../../api/todo";
import { FETCH_FOCUS_DATE, FETCH_TODO_LIST, FETCH_CUR_STATUS } from "../constant/variable"

export const setTodoList = (status, focusDate) => {
  return async (dispatch, getState) =>{
    try{
      const data = await getAllTodoList(status, focusDate);
      dispatch(fetchTodoList(data))
    }catch(e){
      console.log(e);
    }
  }
}

export const setFocusDate = (date) => {
  return async (dispatch, getState) => {
    dispatch(fetchFocusDate(date));
  }
}

export const setCurStatus = (status) => {
  return async (dispatch, getState) => {dispatch(fetchCurStatus(status))}
}

export const putCurItemStatus = (body) => {
  return async (dispatch, getState) => {
    const {code, message} = await putTodoItemStatus(body);
    if(code===200){
      const {curStatus, focusDate} = getState().todo
      console.log(message);
      await dispatch(setTodoList(curStatus, focusDate))
    }
  }
}

export const deleteSelectedItem = (id) => {
  return async (dispatch, getState) => {
    const {code, message} = await deleteTodoItem(id);
    if(code===200){
      const {curStatus, focusDate} = getState().todo
      await dispatch(setTodoList(curStatus, focusDate))
    }
  }
}

const fetchFocusDate = (data) => {
  return {
    type: FETCH_FOCUS_DATE,
    data,
  }
}

const fetchTodoList = (data) =>{
  return {
    type: FETCH_TODO_LIST,
    data,
  }
}

const fetchCurStatus = (data) =>{
  return {
    type: FETCH_CUR_STATUS,
    data,
  }
}