// import { CLEAR_ALL_CAT_DATA, CLEAR_CAT_LIST, CLEAR_SELECTED_CAT, CLEAR_SELECTED_KIND, FETCH_CAT_LIST, FETCH_SELECTED_CAT, FETCH_SELECTED_KIND } from "../constant/variable";
import { CLEAR_CAT_LIST, CLEAR_SELECTED_CAT, FETCH_CAT_LIST, FETCH_CAT_TYPE_LIST, FETCH_SELECTED_CAT, FETCH_SELECTED_KIND } from "../constant/variable";
import catList from "../constant/data/catList.json";
import { getAllKind } from "../../api/cats";
// import catKindList from "../constant/data/catKindList.json";

export const setSelectedKind = (kind) =>{
  return async (dispatch, getState) => {
    try{
      const list = catList.filter(el=>el.kind_code===kind);
      dispatch(fetchSelectedKind(kind))
      dispatch(fetchCatList(list))
    }catch(e){
      console.log(e);
      dispatch(clearCatList());
    }finally {
      dispatch(clearSelectedCat())
    }
  }
}

export const setCatKindList = () => {
  return async (dispatch, getState) => {
    try{
      const data = await getAllKind();
      dispatch(fetchCatKindList(data));
    }catch(e){
      console.log('asdf')
      console.log(e);
      dispatch(clearCatList());
    }finally {
      
    }
  }
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


// const clearAllCatData = () =>{
//   return {
//     type: CLEAR_ALL_CAT_DATA
//   }
// }
const clearCatList = () =>{
  return {
    type: CLEAR_CAT_LIST
  }
}
// const claerSelectedKind = () =>{
//   return {
//     type: CLEAR_SELECTED_KIND
//   }
// }
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
const fetchCatKindList = (data) =>{
  return {
    type: FETCH_CAT_TYPE_LIST,
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