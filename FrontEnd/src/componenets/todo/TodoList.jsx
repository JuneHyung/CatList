import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurStatus, setTodoList } from "../../stores/actions/todo";
import TodoItem from "./TodoItem";

const TodoList = ({today}) => {
  const {todoList, focusDate} = useSelector((state)=>state.todo);
  const dispatch = useDispatch();
  const handleGetTodo = useCallback((status)=>{
    dispatch(setTodoList(status, focusDate))
    dispatch(setCurStatus(status))
  },[dispatch, focusDate])

  return (
    <div>
      <ul className="todo-tab-bar">
        <li> {today}</li>
        <ul className="todo-active-tab-bar">
          <li className="todo-active-item" onClick={()=>handleGetTodo('todo')}>TODO</li>
          <li className="todo-active-item jh-mx-xs" onClick={()=>handleGetTodo('doing')}>DOING</li>
          <li className="todo-active-item" onClick={()=>handleGetTodo('done')}>DONE</li>
        </ul>
      </ul>
      <div className="plus-item-button jh-my-xs">PLUS ITEM</div>
      <ul className="todo-list">
        { 
          todoList.map((v, idx)=>{
            return <TodoItem info={v} idx={idx}/>
          })
        }
      </ul>
    </div>
  );
};
export default TodoList;
