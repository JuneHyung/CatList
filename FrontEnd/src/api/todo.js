import { deleteFetch, getFetch, postFetch, putFetch } from ".";
const url = process.env.REACT_APP_BACKEND_URL;
export const getAllTodoList = async (status, focusDate) =>{
  try{
    const res = await getFetch(`${url}/todo/search/${status}/${focusDate}`);
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error: ${err}`)
    throw err;
  }
}

export const putTodoItemStatus = async (body) =>{
  try{
    const res = await putFetch(`${url}/todo/status`, body);
    const data = await res.json();
    return data;
  }catch(err){
    console.log(`Error : ${err}`)
    throw err;
  }
}

export const postTodoItem = async (body) =>{
  try{
    const res = await postFetch(`${url}/todo/item`, body);
    const data = await res.json();
    return data;
  }catch(err){
    console.log(`Error : ${err}`)
    throw err;
  }
}
export const putTodoItem = async (body) =>{
  try{
    console.log('body')
    console.log(body)
    const res = await putFetch(`${url}/todo/item`, body);
    const data = await res.json();
    return data;
  }catch(err){
    console.log(`Error : ${err}`)
    throw err;
  }
}

export const deleteTodoItem = async (id) =>{
  try{
    const res = await deleteFetch(`${url}/todo/item/${id}`);
    const data = await res.json();
    return data;
  }catch(err){
    console.log(`Error : ${err}`)
    throw err;
  }
}