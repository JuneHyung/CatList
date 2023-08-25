const { CLEAR_ALL_CAT_DATA, CLEAR_CAT_LIST, CLEAR_SELECTED_CAT, CLEAR_SELECTED_KIND, CLEAR_CAT_TYPE_LIST, FETCH_CAT_LIST, FETCH_CAT_TYPE_LIST, FETCH_SELECTED_CAT, FETCH_SELECTED_KIND, FETCH_SELECTED_CHARC, CLEAR_SELECTED_CHARC } = require("../constant/variable");

const initialstate = {
  catList: [],
  catKindList: [],
  selectedKind: '',
  selectedCat: {},
  selectedCharc: {},
}

const catReducer = (prevState = initialstate, action) =>{
  // console.log(action.type, action.data)
  switch(action.type){
    case CLEAR_ALL_CAT_DATA:
      return {catList: [], selectedKind: '', selectedCat: {}};
    case CLEAR_CAT_LIST:
      return {...prevState, catList: []};
    case CLEAR_SELECTED_CAT:
      return {...prevState, selectedCat: {}}
    case CLEAR_SELECTED_KIND:
      return {...prevState, selectedKind: ''};
    case CLEAR_SELECTED_CHARC:
      return {...prevState, selectedCharc: {}};
    case CLEAR_CAT_TYPE_LIST:
      return {...prevState, catKindList: []};
    case FETCH_CAT_LIST:
      return {...prevState, catList: action.data, selectedCat: {}};
    case FETCH_CAT_TYPE_LIST:
      return {...prevState, catKindList: action.data};
    case FETCH_SELECTED_CAT:
      return {...prevState, catList: [], selectedCat: action.data, selectedKind: action.data.kind_name}
    case FETCH_SELECTED_KIND:
      return {...prevState, selectedKind: action.data};
    case FETCH_SELECTED_CHARC:
      return {...prevState, selectedCharc: action.data};
    default:
      return prevState
  }
}

module.exports = catReducer;