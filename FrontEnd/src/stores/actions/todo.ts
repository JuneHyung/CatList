import { deleteTodoItem, getAllTodoList, postTodoItem, putTodoItem, putTodoItemStatus } from "../../api/todo";
import { curStatus } from "../../types";
import { FetchCurStatusAction, FetchEditFlagAction, FetchFocusDateAction, FetchTodoListAction, ThunkAction} from "../../types/action";

import { FETCH_FOCUS_DATE, FETCH_TODO_LIST, FETCH_CUR_STATUS, FETCH_EDIT_FLAG, FETCH_SELECTED_ITEM } from "../constant/variable"

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

export const setFocusDate = (date: string): ThunkAction => {
  return async (dispatch) => {
    dispatch(fetchFocusDate(date));
  }
}

export const setCurStatus = (status: curStatus): ThunkAction => {
  return async (dispatch) => {dispatch(fetchCurStatus(status))}
}

export const setSelectedItem = (info): ThunkAction => {
  return async (dispatch) => {
    dispatch(fetchSelectedItem(info));
  }
}

export const toggleEditFlag = (status: boolean): ThunkAction => {
  return async (dispatch) => {dispatch(fetchEditFlag(status))}
}

export const putCurItemStatus = (body): ThunkAction => {
  return async (dispatch, getState) => {
    const {code, message} = await putTodoItemStatus(body);
    if(code===200){
      const {curStatus, focusDate} = getState().todo
      console.log(message);
      await dispatch(setTodoList(curStatus, focusDate))
    }
  }
}

export const postNewTodoItem = (body): ThunkAction =>{
  return async (dispatch, getState) =>{
    const {code, message} = await postTodoItem(body);
    if(code===200){
      console.log(message);
      const {curStatus, focusDate} = getState().todo
      await dispatch(toggleEditFlag(false))
      await dispatch(setTodoList(curStatus, focusDate))
    }
  }
}

export const putCurTodoItem = (body): ThunkAction =>{
  return async (dispatch, getState) =>{
    const {code, message} = await putTodoItem(body);
    if(code===200){
      console.log(message);
      const {curStatus, focusDate} = getState().todo
      await dispatch(toggleEditFlag(false))
      await dispatch(setTodoList(curStatus, focusDate))
    }
  }
}

export const deleteSelectedItem = (id): ThunkAction => {
  return async (dispatch, getState) => {
    const {code, message} = await deleteTodoItem(id);
    if(code===200){
      console.log(message);
      const {curStatus, focusDate} = getState().todo
      await dispatch(setTodoList(curStatus, focusDate))
    }
  }
}

const fetchFocusDate = (data): FetchFocusDateAction => {
  return {
    type: FETCH_FOCUS_DATE,
    data,
  }
}

const fetchTodoList = (data): FetchTodoListAction =>{
  return {
    type: FETCH_TODO_LIST,
    data,
  }
}

const fetchCurStatus = (data): FetchCurStatusAction =>{
  return {
    type: FETCH_CUR_STATUS,
    data,
  }
}
const fetchEditFlag = (data): FetchEditFlagAction =>{
  return {
    type: FETCH_EDIT_FLAG,
    data,
  }
}
const fetchSelectedItem = (data) =>{
  return {
    type: FETCH_SELECTED_ITEM,
    data,
  }
}