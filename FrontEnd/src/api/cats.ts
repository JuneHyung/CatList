import { getFetch } from ".";
const url = process.env.REACT_APP_BACKEND_URL;
export const getAllKind = async () =>{
  try{
    const res = await getFetch(`${url}/kind`);
    const data:KindList = await res.json();
    return data;
  }catch(err){
    console.error(`Error: ${err}`)
    throw err;
  }
}

export const getAllCatByKind = async (params: GetCatListByKindReqeustParams) => {

  const queryParams = new URLSearchParams()
  queryParams.append('kind_code', params.kind_code.toString())
  queryParams.append('curPage', params.curPage.toString())

  try{
    const res = await getFetch(`${url}/cat/kind?${queryParams}`);
    const data: CatList = await res.json();
    return data;
  }catch(err){
    console.log(`Error: ${err}`);
    throw err;
  }
}

export const getAllCatByKeyword = async (params:GetCatListByKeywordReqeustParams) => {
  const queryParams = new URLSearchParams()
  queryParams.append('kind_code', params.keyword.toString())
  queryParams.append('curPage', params.curPage.toString())

  try{
    const res = await getFetch(`${url}/cat/search?${queryParams}`);
    const data: CatList = await res.json();
    return data;
  }catch(err){
    console.log(`Error: ${err}`);
    throw err;
  }
}


export const getCharcByCharcId = async (params: CatInfo['charc_id']) => {
  try{
    const res = await getFetch(`${url}/charc/search`, params);
    const data: CharcInfo = await res.json();
    return data;
  }catch(err){
    console.log(`Error: ${err}`);
    throw err;
  }
}