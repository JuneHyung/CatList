import { FetchIsLoginAction, FetchUserNameAction } from "../../types/action"
import { FETCH_IS_LOGIN, FETCH_USER_NAME } from "../constant/variable"
export const fetchUserName = (data: string): FetchUserNameAction => {
  return {
    type: FETCH_USER_NAME,
    data,
  }
}
export const fetchIsLogin = (data: boolean | Promise<boolean>): FetchIsLoginAction =>{
  return {
    type: FETCH_IS_LOGIN,
    data,
  }
}