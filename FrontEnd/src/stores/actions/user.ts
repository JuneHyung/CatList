import { FetchSelectedItemAction } from "../../types/action"
import { FETCH_IS_LOGIN } from "../constant/variable"

export const fetchIsLogin = (data: boolean): FetchSelectedItemAction =>{
  return {
    type: FETCH_IS_LOGIN,
    data,
  }
}