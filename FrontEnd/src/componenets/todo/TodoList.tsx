import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurStatus, setTodoList, toggleEditFlag } from "../../stores/actions/todo";
import TodoItem from "./TodoItem";
import TodoEdit from "./TodoEdit";
import { todoStatus } from "../../types/todo";
import { ThunkDispatch } from "../../types/action";
import { TotalInitialstate } from "../../types";

const TodoList = ({ today }) => {
  const { todoList, focusDate, todoEditFlag } = useSelector((state: TotalInitialstate) => state.todo);
  const dispatch: ThunkDispatch = useDispatch();
  const handleGetTodo = useCallback(
    (status: todoStatus) => {
      dispatch(setCurStatus(status));
      dispatch(setTodoList(status, focusDate));
      dispatch(toggleEditFlag(false));
    },
    [dispatch, focusDate]
  );

  return (
    <div>
      <ul className="todo-tab-bar">
        <li className="todo-focus-date"> {today}</li>
        <ul className="todo-active-tab-bar">
          <li className="todo-active-item" onClick={() => handleGetTodo("todo")}>
            TODO
          </li>
          <li className="todo-active-item jh-mx-xs" onClick={() => handleGetTodo("doing")}>
            DOING
          </li>
          <li className="todo-active-item" onClick={() => handleGetTodo("done")}>
            DONE
          </li>
        </ul>
      </ul>
      {todoEditFlag ? (
        <TodoEdit />
      ) : (
        <>
          <div className="plus-item-button jh-my-xs" onClick={() => dispatch(toggleEditFlag(true))}>
            PLUS ITEM
          </div>
          <ul className="todo-list">
            {todoList.map((v, idx) => {
              return <TodoItem key={v.todo_id} info={v} idx={idx} />;
            })}
          </ul>
        </>
      )}
    </div>
  );
};
export default TodoList;
