import { deleteFetch, getFetch, postFetch, putFetch } from ".";
import { DeleteResponseBody, PostResponseBody, PutResponseBody, PutTodoItemStatusRequestBody, TodoItem, TodoItemRequestBody, TodoList } from "../types/todo";
const url = process.env.REACT_APP_BACKEND_URL;
export const getAllTodoList = async (status:string, focusDate:string): Promise<TodoList>=>{
  try{
    const res = await getFetch(`${url}/todo/search/${status}/${focusDate}`);
    const data: TodoList = await res.json();
    return data;
  }catch(err){
    console.error(`Error: ${err}`)
    throw err;
  }
}

export const putTodoItemStatus = async (body: PutTodoItemStatusRequestBody): Promise<PutResponseBody> =>{
  try{
    const res = await putFetch<PutTodoItemStatusRequestBody>(`${url}/todo/status`, body);
    const data:PutResponseBody = await res.json();
    return data;
  }catch(err){
    console.log(`Error : ${err}`)
    throw err;
  }
}

export const postTodoItem = async (body: TodoItemRequestBody): Promise<PostResponseBody> =>{
  try{
    const res = await postFetch<TodoItemRequestBody>(`${url}/todo/item`, body);
    const data: PostResponseBody = await res.json();
    return data;
  }catch(err){
    console.log(`Error : ${err}`)
    throw err;
  }
}
export const putTodoItem = async (body: TodoItemRequestBody): Promise<PutResponseBody> =>{
  try{
    const res = await putFetch<TodoItemRequestBody>(`${url}/todo/item`, body);
    const data: PutResponseBody = await res.json();
    return data;
  }catch(err){
    console.log(`Error : ${err}`)
    throw err;
  }
}

export const deleteTodoItem = async (id:number): Promise<DeleteResponseBody> =>{
  try{
    const res = await deleteFetch(`${url}/todo/item/${id}`);
    const data: DeleteResponseBody = await res.json();
    return data;
  }catch(err){
    console.log(`Error : ${err}`)
    throw err;
  }
}