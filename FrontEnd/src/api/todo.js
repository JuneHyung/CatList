import { getFetch } from ".";
const url = process.env.REACT_APP_BACKEND_URL;
export const getAllTodoList = async (status, focusDate) =>{
  try{
    console.log(status, focusDate)
    const res = await getFetch(`${url}/todo/${status}/${focusDate}`);
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error: ${err}`)
    throw err;
  }
}