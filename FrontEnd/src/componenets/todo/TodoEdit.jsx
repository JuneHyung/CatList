import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewTodoItem, putCurTodoItem, toggleEditFlag } from "../../stores/actions/todo";

const TodoEdit = () =>{
  const dispatch = useDispatch();
  const {selectedItem} = useSelector((state)=>state.todo);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [formData, setFormData] = useState({
    todo_id: '',
    title: '',
    content: '',
    start: '',
    end: '',
    status: 'todo',
  })

  // edit인지 update인지 체크
  useEffect(()=>{
    if(selectedItem.todo_id.length!==0){
      setUpdateFlag(true);
      setFormData(selectedItem)
    }
  },[])

  // input 변경 시 form데이터 변경
  const handleInputChange = useCallback((e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }, [formData])

  // 저장
  const handleSaveFormData = () =>{
    if(updateFlag){
      dispatch(putCurTodoItem(formData))
    }
    else{
      dispatch(postNewTodoItem(formData))
    }
  }

  // 취소
  const handleResetFormData = () =>{
    setFormData({
      todo_id: '',
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