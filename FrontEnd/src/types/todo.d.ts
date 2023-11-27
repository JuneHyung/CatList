export type todoStatus = 'todo' | 'doing' | 'done';

export interface TodoItem{
  todo_id: number,
  title: string,
  content: string,
  start: string,
  end: string,
  status: todoStatus,
}

export type TodoList = TodoItem[];

export interface GetAllTodoListResponse {
  data?: TodoList
}


export interface PutTodoItemStatusRequestBody{
  id: number, 
  status: todoStatus
}
export interface PutResponseBody{
  code:number, 
  message: string
}
export interface PostResponseBody{
  code:number, 
  message: string
}
export interface DeleteResponseBody{
  code:number, 
  message: string
}

export type TodoItemRequestBody = Partial<TodoItem>
export interface todoInitialState {
  todo: {
    focusDate: string,
    curStatus: todoStatus,
    todoList: TodoList,
    editFlag: boolean,
    selectedItem: todoItem
  }
}