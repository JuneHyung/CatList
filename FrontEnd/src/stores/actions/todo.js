import { getAllTodoList } from "../../api/todo";
import { FETCH_FOCUS_DATE, FETCH_TODO_LIST } from "../constant/variable"

export const setTodoList = (status) => {
  return async (dispatch, getState) =>{
    const data = await getAllTodoList(status);
    dispatch(fetchTodoList(data))
  }
}

export const setFocusDate = (date) => {
  return async (dispatch, getState) => {
    dispatch(fetchFocusDate(date));
    // try{
    //   const result = await getCharcByCharcId(charcId);
    //   dispatch(fetchSelectedCharc(result));
    // }catch(e){
    //   console.log(e);
    //   dispatch(clearSelectedCharc());
    // }
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