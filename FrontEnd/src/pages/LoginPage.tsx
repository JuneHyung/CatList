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
    <div>
      <img src={require('./../assets/images/intro-logo.png')} alt='logo'></img>
      <form>
        <input type="text" />
        <input type="password" />
        <button onClick={handleLogin}>변경</button>
      </form>
    </div>
  )
}

export default LoginPage;