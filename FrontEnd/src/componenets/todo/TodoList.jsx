import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSelectedItem, setCurStatus, setTodoList } from "../../stores/actions/todo";
import StatusList from "./statusList";
import MdiIcon from "../common/MdiIcon";

const TodoList = ({today}) => {
  const {todoList, focusDate} = useSelector((state)=>state.todo);
  const dispatch = useDispatch();
  const handleGetTodo = useCallback((status)=>{
    dispatch(setTodoList(status, focusDate))
    dispatch(setCurStatus(status))
  },[dispatch, focusDate])

  const handleDeleteItem = useCallback((id)=>{
    dispatch(deleteSelectedItem(id));
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
          todoList.map((v, idx)=>{
            return <li key={v.todo_id}>
              {idx+1}{v.title} {v.start} {v.end}
              <StatusList id={v.todo_id} status={v.status}/>
              <MdiIcon name="mdiPencil"/>
              <MdiIcon name="mdiDelete" onClick={()=>handleDeleteItem(v.todo_id)}/>
              </li>
          })
        }
      </ul>
    </div>
  );
};
export default TodoList;
