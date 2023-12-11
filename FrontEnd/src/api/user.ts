import { getFetch, postFetch } from ".";
const url = process.env.REACT_APP_BACKEND_URL;
export const onLogin = async (body): Promise<boolean> => {
  console.log(body)
  try{
    const res = await postFetch(`${url}/user/login`, body);
    const data = await res.json();
    console.log(res)
    if(res.status===200){
      localStorage.setItem('Tokens', JSON.stringify({
        'accessToken': data.accessToken,
        'refreshToken': data.refreshToken,
      }))
      console.log('로그인 성공')
      return true;
    }else return false;
  }catch(err){
    console.error(err);
  }
}

export const getTokenFromLocal = async () =>{
  try {
    const val = await localStorage.getItem("Tokens");
    if(val!==null) return JSON.parse(val);
    else return null;
  }catch(e){
    console.error(e.message);
  }
}


export const verifyTokens = async (): Promise<boolean> => {
  const token = await getTokenFromLocal();
  console.log(token)
  if(token===null) console.log('돌아가')
  else{
    try{
      // const res = await getFetch(`${url}/refresh`, {headers: headersConfig})
      const res = await getFetch(`${url}/user/refresh`)
      console.log(res)

      // accessToken 만료, refreshToken 정상 -> 재발급된 accessToken 저장 후 자동 로그인
      // localStorage.setItem(`Tokens`,JSON.stringify({
      //   ...token,
      //   'accessToken': res.data.data.accessToken
      // }))
      if(res.status===200){
        console.log('Refresh 로그인 성공')
        return true;
      }else {
        console.log('다시 로그인해주세요.')
        localStorage.removeItem('Tokens');
        return false;
      }
    }catch(err){
      const code = err.response.data.code;
      console.log(err.response)
      if(code===401) console.error('401 Auth')
      else console.error('Error!');
      return false;
    }
  }
}