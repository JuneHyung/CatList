import { getFetch, postFetch, putFetch } from ".";
import { CatInfo, CatList, CharcInfo, GetCatListByKeywordReqeustParams, GetCatListByKindReqeustParams, KindList } from "../types/cat";
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
  queryParams.append('keyword', params.keyword.toString())
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

export const postCatInfo = async (body: any): Promise<any> =>{
  try{
    const res = await postFetch<any>(`${url}/cat/info`, body);
    const data: any = await res.json();
    return data;
  }catch(err){
    console.log(`Error : ${err}`)
    throw err;
  }
}

export const putCatInfo = async (body: any): Promise<any> =>{
  try{
    const res = await putFetch<any>(`${url}/cat/info`, body);
    const data: any = await res.json();
    return data;
  }catch(err){
    console.log(`Error : ${err}`)
    throw err;
  }
}
