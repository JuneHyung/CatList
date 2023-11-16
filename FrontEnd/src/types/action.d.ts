import { TodoList } from "./todo"

export interface ClearAllCatDataAction {
  type: typeof CLEAR_ALL_CAT_DATA,
}
export interface ClearCatListAction {
  type: typeof CLEAR_CAT_LIST,
}

export interface ClearSelectedKindAction {
  type: typeof CLEAR_SELECTED_KIND,
}
export interface ClearSelectedCatAction {
  type: typeof CLEAR_SELECTED_CAT,
}
export interface ClearSelectedCharcAction {
  type: typeof CLEAR_SELECTED_CHARC,
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
export interface FetchEditFlagAction {
  type: FETCH_EDIT_FLAG,
  data: boolean,
}
export interface FetchSelectedItemAction {
  type: FETCH_SELECTED_ITEM,
  data: TodoItem,
}

export interface ThunkDispatch {
  (thunkAction: ThunkAction): void;
  <A>(action: A): A;
  <TAction>(action: TAction | ThunkAction): TAction;
}

export type ThunkAction = (dispatch: ThunkDispatch, getState: () => State) => void;
