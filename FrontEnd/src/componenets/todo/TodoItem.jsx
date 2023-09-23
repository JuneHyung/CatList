import { useDispatch } from "react-redux";
import MdiIcon from "../common/MdiIcon";
import StatusList from "./statusList";
import { useCallback } from "react";
import { deleteSelectedItem } from "../../stores/actions/todo";

const TodoItem = ({info, idx}) =>{

  const dispatch = useDispatch();
  const handleDeleteItem = useCallback((id)=>{
    dispatch(deleteSelectedItem(id));
  },[dispatch])

  return (
    <li key={info.todo_id} className="todo-list-tiem">
      <span>{idx+1}</span>
      <span className="ellipsis">{info.title}</span>
      <span className="jh-ma-sm">{info.start} ~ {info.end}</span>
      <StatusList id={info.todo_id} status={info.status}/>
      <div>
        <MdiIcon name="mdiPencil" />
        <MdiIcon name="mdiDelete" onClick={()=>handleDeleteItem(info.todo_id)}/>
      </div>
    </li>
  )
}

export default TodoItem;