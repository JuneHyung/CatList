import { useDispatch, useSelector } from "react-redux";
import { fetchIsLogin } from "../stores/actions/user";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const LoginPage = () =>{
  const isLogin = useSelector((state: {isLogin: boolean})=>state.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('login', isLogin)
  const handleLogin = (e) =>{
    e.preventDefault();
    dispatch(fetchIsLogin(!isLogin))
    navigate('/user')
  }

  return (
    <div className="login-page">
      <div className="login-logo">
        <img src={require('./../assets/images/intro-logo.png')} alt='logo'></img>
      </div>
      <form className="login-form">
        <label className="login-input" >
          <input type="text" placeholder="Enter Your ID"/>
        </label>
        <label className="login-input" >
          <input type="password" placeholder="Enter Your Password" />
        </label>
        <button onClick={handleLogin} className="login-button" >로그인</button>
      </form>
    </div>
  )
}

export default LoginPage;