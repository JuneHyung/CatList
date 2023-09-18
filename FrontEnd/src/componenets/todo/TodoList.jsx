import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodoList } from "../../stores/actions/todo";

const TodoList = ({today}) => {
  const {todoList} = useSelector((state)=>state.todo);
  const dispatch = useDispatch();
  const handleGetTodo = useCallback((status)=>{
    dispatch(setTodoList(status))
  },[dispatch])
  return (
    <div>
      <ul className="todo-tab-bar">
        <li> {today}</li>
        <ul className="todo-active-tab-bar">
          <li className="pointer-cursor" onClick={()=>handleGetTodo('todo')}>TODO</li>
          <li className="pointer-cursor" onClick={()=>handleGetTodo('doing')}>DOING</li>
          <li className="pointer-cursor" onClick={()=>handleGetTodo('done')}>DONE</li>
        </ul>
      </ul>
      <div className="plus-item-button pointer-cursor">PLUS ITEM</div>
      <ul className="todo-list">
        { 
          todoList.map((v)=>{
            return <li key={v.todo_id}>{v.todo_id}{v.title} {v.start} {v.end}</li>
          })
        }
      </ul>
    </div>
  );
};
export default TodoList;
