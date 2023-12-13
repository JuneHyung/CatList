import { CatInitialState } from "./cat";
import { TodoInitialState } from "./todo";
import { UserInitialState } from "./user";

export interface TotalInitialstate {
  cat: CatInitialState,
  todo: TodoInitialState,
  user: UserInitialState,
}