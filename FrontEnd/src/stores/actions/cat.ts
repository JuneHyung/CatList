import { CLEAR_ALL_CAT_DATA, CLEAR_CAT_LIST, CLEAR_SELECTED_CAT, CLEAR_SELECTED_CHARC, CLEAR_SELECTED_KIND, FETCH_CAT_LIST, FETCH_CAT_TYPE_LIST, FETCH_CUR_PAGE, FETCH_IS_END_DATA, FETCH_IS_LOADING, FETCH_LAST_KEYWORD, FETCH_SELECTED_CAT, FETCH_SELECTED_CHARC, FETCH_SELECTED_KIND } from "../constant/variable";
import { getAllCatByKind, getAllKind, getAllCatByKeyword, getCharcByCharcId } from "../../api/cats";
import { ClearAllCatDataAction, ClearCatListAction, ClearSelectedCatAction, ClearSelectedCharcAction, ClearSelectedKindAction, FetchCatKindListAction, FetchCatListAction, FetchCurPageAction, FetchIsEndDataAction, FetchIsLoadingAction, FetchLastKeywordAction, FetchSelectedCatAction, FetchSelectedCharcAction, FetchSelectedKindAction, ThunkAction } from "../../types/action";


export const setCatKindList = (): ThunkAction => {
  return async (dispatch) => {
    try{
      const data = await getAllKind();
      dispatch(fetchCatKindList(data));
    }catch(e){
      console.log(e);
      dispatch(clearCatList());
    }
  }
}

export const setSelectedKind = (kind: selectedKindInfo): ThunkAction =>{
  return async (dispatch) => {
    try{
      dispatch(fetchSelectedKind(kind))
    }catch(e){
      console.log(e);
      dispatch(clearCatList());
    }
  }
}


export const getCatListByKind = (params: GetCatListByKindReqeustParams): ThunkAction =>{
  return async (dispatch, getState) => {
    const prevList = getState().catList;
    const isEnd = getState().isEndData;

    dispatch(fetchIsLoading(true))

    try{
      if(!isEnd){
        setTimeout(async()=>{
          const list = await getAllCatByKind(params);
          if(list.length!==0){
            const result: CatList = params.curPage===1 ? list : [...prevList, ...list]
  
            list.length < 10 ? dispatch(fetchIsEndData(true)) : dispatch(fetchIsEndData(false));
  
            dispatch(fetchCurPage(params.curPage))
            dispatch(fetchCatList(result));
          }else{
            dispatch(fetchCatList([]))
            dispatch(fetchIsLoading(false))
          }
          dispatch(fetchIsLoading(false))
        }, 3000);
      }else{
        dispatch(fetchIsLoading(false))
      }
    }
    catch(e){
      console.log(e);
      dispatch(clearAllCatData());
      dispatch(fetchIsLoading(false))
    }
  }
}

export const setSelectedCat = (cat: CatInfo): ThunkAction => {
  return async (dispatch) => {
    try{
      dispatch(fetchSelectedCat(cat))
    }catch(e){
      console.log(e);
      dispatch(clearSelectedCat());
    }
  }
}

// searchbar
export const getCatListByKeyword = (params: GetCatListByKeywordReqeustParams): ThunkAction =>{
  return async (dispatch, getState) =>{
    const prevList = getState().catList;
    const isEnd = getState().isEndData;

    dispatch(fetchIsLoading(true))

    try{
      if(!isEnd){
        setTimeout(async ()=>{
          const list = await getAllCatByKeyword(params);
          dispatch(fetchLastKeyword(params.keyword))
          dispatch(clearSelectedKind());
          if(list.length!==0){
            const result: CatList = params.curPage===1 ? list : [...prevList, ...list]
            
            list.length < 10 ? dispatch(fetchIsEndData(true)) : dispatch(fetchIsEndData(false));
            
            dispatch(fetchCurPage(params.curPage))
            dispatch(fetchCatList(result));
          }else{
            dispatch(fetchCatList([]));
            dispatch(fetchIsLoading(false))
          }
          dispatch(fetchIsLoading(false))
        }, 3000)
      }else{
        dispatch(fetchIsLoading(false))
      }
    } catch(e){
      console.log(e);
      dispatch(clearAllCatData());
      dispatch(fetchIsLoading(false))
    }
  }
}

export const setSelectedCharc = (charcId: CatInfo['charc_id']): ThunkAction => {
  return async (dispatch) => {
    try{
      const result = await getCharcByCharcId(charcId);
      dispatch(fetchSelectedCharc(result));
    }catch(e){
      console.log(e);
      dispatch(clearSelectedCharc());
    }
  }
}

export const resetIsEndData = (): ThunkAction =>{
  return async (dispatch) => {
    dispatch(fetchIsEndData(false))
  }
}

export const toggleIsLoading = (flag: boolean): ThunkAction =>{
  return async (dispatch) => {
    dispatch(fetchIsLoading(flag))
  }
}

const clearAllCatData = (): ClearAllCatDataAction =>{
  return {
    type: CLEAR_ALL_CAT_DATA
  }
}
const clearCatList = (): ClearCatListAction =>{
  return {
    type: CLEAR_CAT_LIST
  }
}

const clearSelectedKind = ():ClearSelectedKindAction =>{
  return {
    type: CLEAR_SELECTED_KIND
  }
}
const clearSelectedCat = ():ClearSelectedCatAction =>{
  return {
    type: CLEAR_SELECTED_CAT
  }
}
const clearSelectedCharc = ():ClearSelectedCharcAction =>{
  return {
    type: CLEAR_SELECTED_CHARC
  }
}
const fetchCatList = (data: CatList):FetchCatListAction =>{
  return {
    type: FETCH_CAT_LIST,
    data,
  }
}
const fetchCatKindList = (data: KindList): FetchCatKindListAction =>{
  return {
    type: FETCH_CAT_TYPE_LIST,
    data,
  }
}
const fetchSelectedKind = (data: selectedKindInfo): FetchSelectedKindAction =>{
  return {
    type: FETCH_SELECTED_KIND,
    data,
  }
}
const fetchSelectedCat = (data: CatInfo): FetchSelectedCatAction =>{
  return {
    type: FETCH_SELECTED_CAT,
    data,
  }
}
const fetchSelectedCharc = (data: CharcInfo): FetchSelectedCharcAction => {
  return {
    type: FETCH_SELECTED_CHARC,
    data,
  }
}

const fetchLastKeyword = (data:string):FetchLastKeywordAction => {
  return {
    type: FETCH_LAST_KEYWORD,
    data,
  }
}
const fetchCurPage = (data: number): FetchCurPageAction => {
  return {
    type: FETCH_CUR_PAGE,
    data,
  }
}
const fetchIsEndData = (data: boolean):FetchIsEndDataAction => {
  return {
    type: FETCH_IS_END_DATA,
    data,
  }
}
const fetchIsLoading = (data:boolean):FetchIsLoadingAction => {
  return {
    type: FETCH_IS_LOADING,
    data,
  }
}