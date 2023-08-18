import { CLEAR_ALL_CAT_DATA, CLEAR_CAT_LIST, CLEAR_SELECTED_CAT, CLEAR_SELECTED_KIND, FETCH_CAT_LIST, FETCH_SELECTED_CAT, FETCH_SELECTED_KIND } from "../constant/variable";
import catList from "../constant/data/catList.json";

export const setSelectedKind = (kind) =>{
  return (dispatch, getState) => dispatch(fetchSelectedKind(kind))
}

export const getCatList = () => {
  return async (dispatch, getState) => {
    try{
      const list = catList;
      dispatch(fetchCatList(list))
    }catch(e){
      console.log(e);
      dispatch(clearCatList());
    }finally {
      
    }
  }
}

export const setSelectedCat = (catNo) => {
  return async (dispatch, getState) => {
    try{
      const list = catList;
      const target = list.find((el)=> el.catNo === catNo);
      dispatch(fetchSelectedCat(target))
    }catch(e){
      console.log(e);
      dispatch(clearSelectedCat());
    }finally {

    }
  }
}

const clearAllCatData = () =>{
  return {
    type: CLEAR_ALL_CAT_DATA
  }
}
const clearCatList = () =>{
  return {
    type: CLEAR_CAT_LIST
  }
}
const claerSelectedKind = () =>{
  return {
    type: CLEAR_SELECTED_KIND
  }
}
const clearSelectedCat = () =>{
  return {
    type: CLEAR_SELECTED_CAT
  }
}
const fetchCatList = (data) =>{
  return {
    type: FETCH_CAT_LIST,
    data,
  }
}
const fetchSelectedKind = (data) =>{
  return {
    type: FETCH_SELECTED_KIND,
    data,
  }
}
const fetchSelectedCat = (data) =>{
  return {
    type: FETCH_SELECTED_CAT,
    data,
  }
}