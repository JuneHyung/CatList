import { getFetch, postFetch } from ".";
const url = process.env.REACT_APP_BACKEND_URL;
export const onLogin = async (body) => {
  try{
    const res = await postFetch(`${url}/login`, body);
    const data = await res.json();
    if(res.status===200){
      localStorage.setItem('Tokens', JSON.stringify({
        'accessToken': data.accessToken,
        'refreshToken': data.refreshToken,
      }))
      console.log('로그인 성공')
    }
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


export const verifyTokens = async () => {
  const token = await getTokenFromLocal();
  
  if(token===null) console.log('돌아가')
  else{
    const headersConfig = {
      "refresh" : token.refreshToken,
      "authorization": `Bearer ${token.accessToken}`
    };

    try{
      // const res = await getFetch(`${url}/refresh`, {headers: headersConfig})
      const res = await getFetch(`${url}/refresh`)
      // console.log(res.data)

      // accessToken 만료, refreshToken 정상 -> 재발급된 accessToken 저장 후 자동 로그인
      // localStorage.setItem(`Tokens`,JSON.stringify({
      //   ...token,
      //   'accessToken': res.data.data.accessToken
      // }))
      console.log('Refresh 로그인 성공')
    }catch(err){
      const code = err.response.data.code;
      console.log(err.response)
      if(code===401) console.error('401 Auth')
      else console.error('Error!')
    }
  }
}