import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewTodoItem, putCurTodoItem, toggleEditFlag } from "../../stores/actions/todo";
import { TodoItemRequestBody } from "../../types/todo";
import { ThunkDispatch } from "../../types/action";
import { TotalInitialstate } from "../../types";

const TodoEdit = () =>{
  const dispatch: ThunkDispatch = useDispatch();
  const {selectedItem} = useSelector((state: TotalInitialstate)=>state.todo);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [formData, setFormData] = useState<TodoItemRequestBody>({
    todo_id: '',
    title: '',
    content: '',
    start: '',
    end: '',
    status: 'todo',
  })

  // edit인지 update인지 체크
  useEffect(()=>{
    if(typeof selectedItem.todo_id==='string' &&selectedItem.todo_id.length!==0){
      setUpdateFlag(true);
      setFormData(selectedItem)
    }
  },[selectedItem])

  // input 변경 시 form데이터 변경
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLSelectElement>)=>{
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
    <form className="todo-edit-form">
      <ul className="todo-edit-button-wrap">
        <button type="button" className="todo-edit-button" onClick={handleSaveFormData}>Save</button>
        <button type="button" className="todo-edit-button jh-mx-xs" onClick={handleResetFormData}>Reset</button>
        <button type="button" className="todo-edit-button" onClick={handleCancel}>Cancel</button>
      </ul>
      <label htmlFor="title" className="todo-edit-label">
        <span className="todo-edit-text">제목</span>
        <input type="text" name="title" className="todo-edit-input jh-ml-sm" value={formData.title} onChange={handleInputChange}/>
      </label>
      
      <label htmlFor="start" className="todo-edit-label">
        <span className="todo-edit-text">시작 날짜</span>
      <input type="date" name="start" className="todo-edit-input jh-ml-sm" value={formData.start} onChange={handleInputChange}/>
      </label>
      <label htmlFor="end" className="todo-edit-label">
        <span className="todo-edit-text">종료 날짜</span>
      <input type="date" name="end" className="todo-edit-input jh-ml-sm" value={formData.end} onChange={handleInputChange} />
      </label>
      <label htmlFor="status" className="todo-edit-label">
        <span className="todo-edit-text">상태</span>
        <select value={formData.status} name="status" className="todo-edit-input jh-ml-sm" onChange={handleInputChange}>
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </label>
      <label htmlFor="content" className="todo-edit-label">
        <span className="todo-edit-text">내용</span>
        <textarea
        name="content" 
        className="todo-edit-input-area jh-ml-sm" 
        rows={5}
        maxLength={200}
        value={formData.content} 
        onChange={handleInputChange} />
      </label>
    </form>
  )
}

export default TodoEdit;