const { CLEAR_ALL_CAT_DATA, CLEAR_CAT_LIST, CLEAR_SELECTED_CAT, CLEAR_SELECTED_KIND, CLEAR_CAT_TYPE_LIST, FETCH_CAT_LIST, FETCH_CAT_TYPE_LIST, FETCH_SELECTED_CAT, FETCH_SELECTED_KIND, FETCH_SELECTED_CHARC, CLEAR_SELECTED_CHARC, FETCH_LAST_KEYWORD, FETCH_CUR_PAGE, FETCH_IS_END_DATA, FETCH_IS_LOADING } = require("../constant/variable");

const initialstate = {
  catList: [],
  catKindList: [],
  lastKeyword: '',
  selectedKindName: '',
  selectedKindCode: '',
  curPage: 1,
  selectedCat: {},
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
}

const catReducer = (prevState = initialstate, action: any) =>{
  // console.log(action.type, action.data)
  switch(action.type){
    case CLEAR_ALL_CAT_DATA:
      return {catList: [], selectedKindName: '', selectedCat: {}};
    case CLEAR_CAT_LIST:
      return {...prevState, catList: []};
    case CLEAR_SELECTED_CAT:
      return {...prevState, selectedCat: {}}
    case CLEAR_SELECTED_KIND:
      return {...prevState, selectedKindName: '', selectedKindCode: '',};
    case CLEAR_SELECTED_CHARC:
      return {...prevState, selectedCharc: {}};
    case CLEAR_CAT_TYPE_LIST:
      return {...prevState, catKindList: []};
    case FETCH_CAT_LIST:
      return {...prevState, catList: action.data, selectedCat: {}};
    case FETCH_CAT_TYPE_LIST:
      return {...prevState, catKindList: action.data};
    case FETCH_SELECTED_CAT:
      return {...prevState, catList: [], selectedCat: action.data,}
    case FETCH_SELECTED_KIND:
      return {...prevState, selectedKindName: action.data.kind_name, selectedKindCode: action.data.kind_code};
    case FETCH_SELECTED_CHARC:
      return {...prevState, selectedCharc: action.data};
    case FETCH_LAST_KEYWORD:
      return {...prevState, lastKeyword: action.data};
    case FETCH_CUR_PAGE:
      return {...prevState, curPage: action.data};
    case FETCH_IS_END_DATA:
      return {...prevState, isEndData: action.data};
    case FETCH_IS_LOADING:
      return {...prevState, isLoading: action.data};
    default:
      return prevState
  }
}

export default catReducer;