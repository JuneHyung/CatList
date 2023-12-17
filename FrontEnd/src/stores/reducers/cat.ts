import { AnyAction } from "redux";
import { CatInitialState } from "../../types/cat";
import { FETCH_CAT_EDIT_FLAG } from "../constant/variable";

import { CLEAR_ALL_CAT_DATA, CLEAR_SELECTED_CAT, FETCH_CAT_LIST, FETCH_CAT_TYPE_LIST, FETCH_SELECTED_CAT, FETCH_SELECTED_KIND, FETCH_SELECTED_CHARC, FETCH_LAST_KEYWORD, FETCH_CUR_PAGE, FETCH_IS_END_DATA, FETCH_IS_LOADING } from "../constant/variable";

const initialState: CatInitialState ={
  catList: [],
  catKindList: [],
  lastKeyword: '',
  selectedKindName: '',
  selectedKindCode: '',
  curPage: 1,
  selectedCat: {
    cat_code: -1,
    cat_name: '',
    cat_age: 0,
    kind_code: '',
    description: '',
    create_date: '',
    profile: '',
    address: '',
    charc_id: '',
    see: 0,
    kind_name: '',
    kind_profile: '',
    user_id: ''
  },
  selectedCharc: {
    charc_id: "",
    curious: 0,
    extrovert: 0,
    friendly: 0,
    independence: 0,
    introvert: 0,
    tranquil: 0
  },
  isEndData: false,
  isLoading: false,
  catEditFlag: false,
}

const catReducer = (prevState = initialState, action: AnyAction) =>{
  // console.log(action.type, action.data)
  switch(action.type){
    case CLEAR_ALL_CAT_DATA:
      return initialState;
    case CLEAR_SELECTED_CAT:
      return {...prevState, selectedCat: initialState.selectedCat}
    case FETCH_CAT_LIST:
      return {...prevState, catList: action.data, selectedCat: initialState.selectedCat, catEditFlag: false};
    case FETCH_CAT_TYPE_LIST:
      return {...prevState, catKindList: action.data, selectedKindName: '', selectedKindCode: '',};
    case FETCH_SELECTED_CAT:
      return {...prevState, selectedCat: action.data}
    case FETCH_SELECTED_CHARC:
      return {...prevState, selectedCharc: action.data};
    case FETCH_SELECTED_KIND:
      return {...prevState, selectedKindName: action.data.kind_name, selectedKindCode: action.data.kind_code, catEditFlag: false};
    case FETCH_LAST_KEYWORD:
      return {...prevState, lastKeyword: action.data, selectedKindCode: '', selectedKindName: '',  catEditFlag: false};
    case FETCH_CUR_PAGE:
      return {...prevState, curPage: action.data};
    case FETCH_IS_END_DATA:
      return {...prevState, isEndData: action.data};
    case FETCH_IS_LOADING:
      return {...prevState, isLoading: action.data};
    case FETCH_CAT_EDIT_FLAG:
      return {...prevState, catEditFlag: action.data};
    default:
      return prevState
  }
}

export default catReducer;