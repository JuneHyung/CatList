const { CLEAR_CAT_LIST, CLEAR_SELECTED_CAT, CLEAR_SELECTED_KIND, CLEAR_ALL_CAT_DATA, FETCH_CAT_LIST, FETCH_SELECTED_CAT, FETCH_SELECTED_KIND } = require("../constant/variable");

const initialstate = {
  catList: [],
  selectedKind: '',
  selectedCat: {},
}

const catReducer = (prevState = initialstate, action) =>{
  switch(action.type){
    case CLEAR_ALL_CAT_DATA:
      return {catList: [], selectedKind: '', selectedCat: {}};
    case CLEAR_CAT_LIST:
      return {...prevState, catList: []};
    case CLEAR_SELECTED_CAT:
      return {...prevState, selectedCat: {}}
    case CLEAR_SELECTED_KIND:
      return {...prevState, selectedKind: ''};
    case FETCH_CAT_LIST:
      console.log('come?')
      return {...prevState, catList: action.data};
    case FETCH_SELECTED_CAT:
      return {...prevState, selectedCat: action.data}
    case FETCH_SELECTED_KIND:
      return {...prevState, selectedKind: action.data};
    default:
      return prevState
  }
}

module.exports = catReducer;