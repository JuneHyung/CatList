import { getFetch } from ".";
const url = process.env.REACT_APP_BACKEND_URL;
export const getAllKind = async () =>{
  try{
    const res = await getFetch(`${url}/kind`);
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error: ${err}`)
    throw err;
  }
}