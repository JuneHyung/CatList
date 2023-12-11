
import _ from 'lodash';
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*', 
  'mode': 'no-cors'
}
type methodType = 'GET' | 'POST' | 'PUT' | 'DELETE';
const defaultOptions = (method: methodType) =>{
  return {
    method,
    headers,
  }
}

const getTokenFromLocal = async () => {
  try{
    const val = await localStorage.getItem('Tokens')
    if(val !== null) return JSON.parse(val);
    else return null;
  }catch(e){
    throw e;
  }
}

export const getFetch = async <T>(url:string, params?:T) => {
  const token = await getTokenFromLocal();
  const options = defaultOptions('GET')
  if(token!==null){
    options.headers["refresh"] = token.refreshToken;
    options.headers["authorization"] = `Bearer ${token.accessToken}`;
  }
  
  if(params===undefined || params===null){
    return await fetch(`${url}`, options)
  }else{
    return await fetch(`${url}/${params}`, options)
  }
}

export const postFetch = async<T> (url:string, body:T) => {
    const token = await getTokenFromLocal();
    const options = _.merge(defaultOptions('POST'), {body:JSON.stringify(body)})
    if(token!==null){
      options["refresh"] = token.refreshToken;
      options["authorization"] = `Bearer ${token.accessToken}`;
    }
    return await fetch(`${url}`, options)
}

export const putFetch = async<T> (url:string, body:T) => {
    const token = await getTokenFromLocal();
    const options = _.merge(defaultOptions('PUT'), {body:JSON.stringify(body)})
    if(token!==null){
      options["refresh"] = token.refreshToken;
      options["authorization"] = `Bearer ${token.accessToken}`;
    }
    return await fetch(`${url}`, options)
}

export const deleteFetch = async<T> (url:string, params?:T) => {
  const token = await getTokenFromLocal();
  const options = defaultOptions('DELETE')
  if(token!==null){
    options["refresh"] = token.refreshToken;
    options["authorization"] = `Bearer ${token.accessToken}`;
  }
  if(params===undefined || params===null){
    return await fetch(`${url}`, options)
  }else{
    return await fetch(`${url}/${params}`, options)
  }
}