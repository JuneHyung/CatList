import { useDispatch } from "react-redux";
import { fetchIsLogin, fetchUserName } from "../stores/actions/user";
import { useNavigate } from "react-router";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { onLogin } from "../api/user";

const LoginPage = () =>{
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitLoginForm = useCallback(async (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const flag = await onLogin({userId, userPw})
    if(flag){
      dispatch(fetchUserName(flag.userName))
      dispatch(fetchIsLogin(true))
      navigate('/catList')
    }
  },[userId, userPw, dispatch, navigate])
  
  const handleIdInput = useCallback((e: ChangeEvent<HTMLInputElement>) =>{
    setUserId(e.target.value);
  }, [])
  const handlePasswordInput = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
    setUserPw(e.target.value);
  },[])

  return (
    <div className="login-page">
      <div className="login-logo">
        <img src={require('./../assets/images/intro-logo.png')} alt='logo'></img>
      </div>
      <form className="login-form" onSubmit={submitLoginForm}>
        <label className="login-input" >
          <input type="text" placeholder="Enter Your ID" onChange={handleIdInput}/>
        </label>
        <label className="login-input" >
          <input type="password" placeholder="Enter Your Password" onChange={handlePasswordInput}/>
        </label>
        <button className="login-button">로그인</button>
      </form>
    </div>
  )
}

export default LoginPage;