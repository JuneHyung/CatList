import { useCallback, useState } from "react";
import StatusList from "./statusList";
import { useDispatch } from "react-redux";
import { postNewTodoItem, toggleEditFlag } from "../../stores/actions/todo";

const TodoEdit = () =>{
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    start: '',
    end: '',
    status: 'todo',
  })

  const handleInputChange = useCallback((e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)
  }, [formData])

  const handleSaveFormData = () =>{
    // console.log(formData)
    dispatch(postNewTodoItem(formData))
  }

  const handleResetFormData = () =>{
    setFormData({
      title: '',
      content: '',
      start: '',
      end: '',
      status: 'todo',
    })
  }

  const handleCancel = () =>{
    dispatch(toggleEditFlag(false))
  }
  return(
    <form>
      <ul>
        <button type="button" onClick={handleSaveFormData}>Save</button>
        <button type="button" onClick={handleResetFormData}>Reset</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </ul>
      <label htmlFor="title">제목 : </label>
      <input type="text" name="title" value={formData.title} onChange={handleInputChange}/>
      
      <label htmlFor="content">내용 : </label>
      <input type="textarea" name="content" value={formData.content} onChange={handleInputChange} />
      <label htmlFor="start">시작 날짜 : </label>
      <input type="date" name="start" value={formData.start} onChange={handleInputChange}/>
      <label htmlFor="end">종료 날짜 : </label>
      <input type="date" name="end" value={formData.end} onChange={handleInputChange} />
      <label htmlFor="status">상태 : </label>
      <select value={formData.status} name="status" onChange={handleInputChange}>
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
    </form>
  )
}

export default TodoEdit;