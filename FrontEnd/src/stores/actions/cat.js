import { CLEAR_ALL_CAT_DATA, CLEAR_CAT_LIST, CLEAR_SELECTED_CAT, CLEAR_SELECTED_CHARC, CLEAR_SELECTED_KIND, FETCH_CAT_LIST, FETCH_CAT_TYPE_LIST, FETCH_SELECTED_CAT, FETCH_SELECTED_CHARC, FETCH_SELECTED_KIND } from "../constant/variable";
import { getAllCatByKind, getAllKind, getAllCatByKeyword, getCharcByCharcId } from "../../api/cats";


export const setCatKindList = () => {
  return async (dispatch, getState) => {
    try{
      const data = await getAllKind();
      dispatch(fetchCatKindList(data));
    }catch(e){
      console.log(e);
      dispatch(clearCatList());
    }
  }
}

export const setSelectedKind = (kind) =>{
  return async (dispatch, getState) => {
    try{
      dispatch(fetchSelectedKind(kind))
    }catch(e){
      console.log(e);
      dispatch(clearCatList());
    }
  }
}


export const getCatListByKind = (params) =>{
  return async (dispatch, getState) => {
    try{
      const list = await getAllCatByKind(params);
      dispatch(fetchCatList(list));
    }
    catch(e){
      console.log(e);
      dispatch(clearAllCatData());
    }
  }
}

export const setSelectedCat = (cat) => {
  return async (dispatch, getState) => {
    try{
      dispatch(fetchSelectedCat(cat))
    }catch(e){
      console.log(e);
      dispatch(clearSelectedCat());
    }
  }
}

// searchbar
export const getCatListByKeyword = (params) =>{
  return async (dispatch, getState) =>{
    try{
      const list = await getAllCatByKeyword(params);
      dispatch(fetchCatList(list));
      dispatch(clearSelectedKind());
    }
    catch(e){
      console.log(e);
      dispatch(clearAllCatData());
    }
  }
}

export const setSelectedCharc = (charcId) => {
  return async (dispatch, getState) => {
    try{
      const result = await getCharcByCharcId(charcId);
      dispatch(fetchSelectedCharc(result));
    }catch(e){
      console.log(e);
      dispatch(clearSelectedCharc());
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

const clearSelectedKind = () =>{
  return {
    type: CLEAR_SELECTED_KIND
  }
}
const clearSelectedCat = () =>{
  return {
    type: CLEAR_SELECTED_CAT
  }
}
const clearSelectedCharc = () =>{
  return {
    type: CLEAR_SELECTED_CHARC
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
const fetchSelectedCharc = (data) => {
  return {
    type: FETCH_SELECTED_CHARC,
    data,
  }
}