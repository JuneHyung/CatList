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

export const getAllCatByKind = async (params) => {
  const queryParams = new URLSearchParams(params)
  try{
    const res = await getFetch(`${url}/cat/kind?${queryParams}`);
    const data = await res.json();
    return data;
  }catch(err){
    console.log(`Error: ${err}`);
    throw err;
  }
}

export const getAllCatByKeyword = async (params) => {
  const queryParams = new URLSearchParams(params)
  try{
    const res = await getFetch(`${url}/cat/search?${queryParams}`);
    const data = await res.json();
    return data;
  }catch(err){
    console.log(`Error: ${err}`);
    throw err;
  }
}


export const getCharcByCharcId = async (params) => {
  try{
    const res = await getFetch(`${url}/charc/search`, params);
    const data = await res.json();
    return data;
  }catch(err){
    console.log(`Error: ${err}`);
    throw err;
  }
}