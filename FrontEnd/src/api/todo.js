import { getFetch } from ".";
const url = process.env.REACT_APP_BACKEND_URL;
export const getAllTodoList = async (status) =>{
  try{
    const res = await getFetch(`${url}/todo/${status}`);
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error: ${err}`)
    throw err;
  }
}