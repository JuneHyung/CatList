import { useDispatch } from "react-redux";
import MdiIcon from "../common/MdiIcon";
import StatusList from "./statusList";
import { useCallback } from "react";
import { deleteSelectedItem, setSelectedItem, toggleEditFlag } from "../../stores/actions/todo";
import { ThunkDispatch } from "../../types/action";

const TodoItem = ({info, idx}) =>{

  const dispatch: ThunkDispatch = useDispatch();
  const handleDeleteItem = useCallback((id:number)=>{
    dispatch(deleteSelectedItem(id));
  },[dispatch])
  
  const handleUpdateItem = useCallback(()=>{
    dispatch(toggleEditFlag(true))
    dispatch(setSelectedItem(info))
  },[dispatch, info])

  return (
    <li key={info.todo_id} className="todo-list-item">
      <span className="todo-info-idx">{idx+1}</span>
      <span className="ellipsis todo-info-title">{info.title}</span>
      <span className="todo-info-range-date">{info.start} ~ {info.end}</span>
        <StatusList id={info.todo_id} status={info.status}/>
      <div className="todo-info-button-wrap">
        <MdiIcon name="mdiPencil" onClick={handleUpdateItem}/>
        <MdiIcon name="mdiDelete" onClick={()=>handleDeleteItem(info.todo_id)}/>
      </div>
    </li>
  )
}

export default TodoItem;