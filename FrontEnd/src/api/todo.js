import { getFetch, putFetch } from ".";
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

export const putTodoItem = async (body) =>{
  try{
    const res = await putFetch(`${url}/todo/status`, body);
    const data = await res.json();
    return data;
  }catch(err){
    console.log(`Error : ${err}`)
    throw err;
  }
}