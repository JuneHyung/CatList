const StatusList = ({status}) =>{
  console.log(status)
  return (
    <select value={status}>
      <option value="todo">Todo</option>
      <option value="doing">Doing</option>
      <option value="done">Done</option>
    </select>
  )
}

export default StatusList