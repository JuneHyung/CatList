import { MiddlewareAPI, Dispatch, AnyAction, compose, applyMiddleware, legacy_createStore as createStore } from "redux";
import reducer from '../../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialstate:{cat: CatInitialState} = {
  cat: {
    catList: [],
    catKindList: [],
    lastKeyword: '',
    selectedKindName: '',
    selectedKindCode: '',
    curPage: 1,
    selectedCat: {
      cat_code: 0,
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
      kind_profile: ''
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
  }
}

const firstMiddleware = (store: MiddlewareAPI) => (dispatch: Dispatch<AnyAction>) => (action: AnyAction) => {
  dispatch(action)
}
const thunkMiddleware = (store:MiddlewareAPI) => (dispatch:Dispatch<AnyAction>) => (action: any) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return dispatch(action)
}

const enhancer = process.env.NODE_ENV === 'production'
  ? compose(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware,
    ),
  )
  : composeWithDevTools(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware,
    ),
  );

const store = createStore(reducer, initialstate, enhancer);


export default store;