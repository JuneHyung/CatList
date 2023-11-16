
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

export const getFetch = async <T>(url:string, params?:T) => {
  const options = defaultOptions('GET')
  if(params===undefined || params===null){
    return await fetch(`${url}`, options)
  }else{
    return await fetch(`${url}/${params}`, options)
  }
}

export const postFetch = async<T> (url:string, body:T) => {
    const options = _.merge(defaultOptions('POST'), {body:JSON.stringify(body)})
    return await fetch(`${url}`, options)
}

export const putFetch = async<T> (url:string, body:T) => {
    const options = _.merge(defaultOptions('PUT'), {body:JSON.stringify(body)})
    return await fetch(`${url}`, options)
}

export const deleteFetch = async<T> (url:string, params?:T) => {
  const options = defaultOptions('DELETE')
  if(params===undefined || params===null){
    return await fetch(`${url}`, options)
  }else{
    return await fetch(`${url}/${params}`, options)
  }
}