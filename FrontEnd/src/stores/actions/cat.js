import { CLEAR_ALL_CAT_DATA, CLEAR_CAT_LIST, CLEAR_SELECTED_CAT, CLEAR_SELECTED_CHARC, CLEAR_SELECTED_KIND, FETCH_CAT_LIST, FETCH_CAT_TYPE_LIST, FETCH_CUR_PAGE, FETCH_IS_END_DATA, FETCH_LAST_KEYWORD, FETCH_SELECTED_CAT, FETCH_SELECTED_CHARC, FETCH_SELECTED_KIND, FETCH_SELECTED_KIND_CODE } from "../constant/variable";
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
    const prevList = getState().cat.catList;
    const isEnd = getState().cat.isEndData;
    try{
      if(!isEnd){
        const list = await getAllCatByKind(params);
        if(list.length!==0){
          const result = params.curPage===1 ? list : [...prevList, ...list]
          list.length < 10 ? dispatch(fetchIsEndData(true)) : dispatch(fetchIsEndData(false));
          dispatch(fetchCurPage(params.curPage))
          dispatch(fetchCatList(result));
        }
      }
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
    const prevList = getState().cat.catList;
    const isEnd = getState().cat.isEndData;
    try{
      if(!isEnd){
        const list = await getAllCatByKeyword(params);
        dispatch(fetchLastKeyword(params.keyword))
        dispatch(clearSelectedKind());
        if(list.length!==0){
          const result = params.curPage===1 ? list : [...prevList, ...list]
          
          list.length < 10 ? dispatch(fetchIsEndData(true)) : dispatch(fetchIsEndData(false));
          
          dispatch(fetchCurPage(params.curPage))
          dispatch(fetchCatList(result));
        }else{
          dispatch(fetchCatList([]));
        }
      }
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

export const resetIsEndData = () =>{
  return async (dispatch, getState) => {
    dispatch(fetchIsEndData(false))
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

const fetchLastKeyword = (data) => {
  return {
    type: FETCH_LAST_KEYWORD,
    data,
  }
}
const fetchCurPage = (data) => {
  return {
    type: FETCH_CUR_PAGE,
    data,
  }
}
const fetchIsEndData = (data) => {
  return {
    type: FETCH_IS_END_DATA,
    data,
  }
}