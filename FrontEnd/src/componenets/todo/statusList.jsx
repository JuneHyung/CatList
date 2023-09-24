import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { putCurItemStatus } from "../../stores/actions/todo";

const StatusList = ({id, status}) =>{
  const dispatch = useDispatch();
  const handleOnChange = useCallback((selectedStatus)=>{
    dispatch(putCurItemStatus({id, status: selectedStatus}))
  },[dispatch, id])
  return (
    <select value={status} onChange={(e)=>handleOnChange(e.target.value)} className="todo-info-status">
      <option value="todo">Todo</option>
      <option value="doing">Doing</option>
      <option value="done">Done</option>
    </select>
  )
}

export default StatusList