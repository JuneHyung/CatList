import { useDispatch } from "react-redux";
import { fetchIsLogin } from "../stores/actions/user";
import { useNavigate } from "react-router";

const UserPage = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('Tokens')
    dispatch(fetchIsLogin(false));
    navigate('/login');
  }
  return (
    <div>
      UserSetting
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}
export default UserPage;