import { UserInitialState } from "../../types/user";
import { FETCH_IS_LOGIN, FETCH_USER_NAME } from "../constant/variable";

const initialstate: UserInitialState = {
  isLogin: false,
  userName: '',
}

const userReducer = (prevState = initialstate, action : any) =>{
  switch(action.type){
    case FETCH_USER_NAME:
      return {...prevState, userName: action.data};
    case FETCH_IS_LOGIN:
      return {...prevState, isLogin: action.data};
    default:
      return prevState
  }
}
export default userReducer;
