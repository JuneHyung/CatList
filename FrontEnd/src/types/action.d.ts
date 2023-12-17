import { TodoList } from "./todo"

export interface ClearAllCatDataAction {
  type: typeof CLEAR_ALL_CAT_DATA,
}

export interface ClearSelectedCatAction {
  type: typeof CLEAR_SELECTED_CAT,
}

export interface FetchCatListAction {
  type: typeof FETCH_CAT_LIST,
  data
}
export interface FetchCatKindListAction {
  type: typeof FETCH_CAT_TYPE_LIST,
  data
}
export interface FetchSelectedKindAction {
  type: typeof FETCH_SELECTED_KIND,
  data
}
export interface FetchSelectedCatAction {
  type: typeof FETCH_SELECTED_CAT,
  data
}
export interface FetchSelectedCharcAction {
  type: typeof FETCH_SELECTED_CHARC,
  data
}

export interface FetchLastKeywordAction {
  type: typeof FETCH_LAST_KEYWORD,
  data
}
export interface FetchCurPageAction {
  type: typeof FETCH_CUR_PAGE,
  data
}
export interface FetchIsEndDataAction {
  type: typeof FETCH_IS_END_DATA,
  data
}
export interface FetchIsLoadingAction {
  type: typeof FETCH_IS_LOADING,
  data
}


// Todo Actions
export interface FetchFocusDateAction {
  type: FETCH_FOCUS_DATE,
  data: string,
}

export interface FetchTodoListAction {
  type: FETCH_TODO_LIST,
  data: TodoList,
}

export interface FetchCurStatusAction {
  type: FETCH_CUR_STATUS,
  data: todoStatus,
}
export interface FetchCatEditFlagAction {
  type: FETCH_CAT_EDIT_FLAG,
  data: boolean,
}
export interface FetchTodoEditFlagAction {
  type: FETCH_TODO_EDIT_FLAG,
  data: boolean,
}
export interface FetchSelectedTodoInfoAction {
  type: FETCH_SELECTED_TODO_INFO,
  data: TodoItem,
}

// User Actions
export interface FetchIsLoginAction {
  type: FETCH_IS_LOGIN,
  data: boolean| Promise<boolean>,
}
export interface FetchUserNameAction {
  type: FETCH_USER_NAME,
  data: string,
}


export interface ThunkDispatch {
  (thunkAction: ThunkAction): void;
  <A>(action: A): A;
  <TAction>(action: TAction | ThunkAction): TAction;
}

export type ThunkAction = (dispatch: ThunkDispatch, getState: () => State) => void;
