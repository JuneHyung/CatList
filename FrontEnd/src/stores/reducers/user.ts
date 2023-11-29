import { FETCH_IS_LOGIN } from "../constant/variable";

const initialstate = {
  isLogin: false,
}

const userReducer = (prevState = initialstate, action : any) =>{
  console.log(action.type, action.data)
  switch(action.type){
    case FETCH_IS_LOGIN:
      return {isLogin: action.data};
    default:
      return prevState
  }
}
export default userReducer;
