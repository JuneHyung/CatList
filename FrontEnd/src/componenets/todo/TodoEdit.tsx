import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewTodoItem, putCurTodoItem, toggleEditFlag } from "../../stores/actions/todo";
import { TodoItemRequestBody } from "../../types/todo";
import { ThunkDispatch } from "../../types/action";
import { TotalInitialstate } from "../../types";
import TextInput from "../form/TextInput";
import SelectboxInput from "../form/SelectboxInput";
import DateInput from "../form/DateInput";
import TextareaInput from "../form/TextareaInput";

const TodoEdit = () =>{
  const dispatch: ThunkDispatch = useDispatch();
  const {todoSelectedItem} = useSelector((state: TotalInitialstate)=>state.todo);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [formData, setFormData] = useState<TodoItemRequestBody>({
    todo_id: '',
    title: '',
    content: '',
    start: '',
    end: '',
    status: 'todo',
  })
  const statusList = [{dtlCd: 'todo', dtlNm: 'Todo'}, {dtlCd: 'doing', dtlNm: 'Doing'}, {dtlCd: 'done', dtlNm: 'Done'}, ]
  // edit인지 update인지 체크
  useEffect(()=>{
    if(typeof todoSelectedItem.todo_id==='string' &&todoSelectedItem.todo_id.length!==0){
      setUpdateFlag(true);
      setFormData(todoSelectedItem)
    }
  },[todoSelectedItem])


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
    <form className="edit-form">
      <ul className="edit-button-wrap">
        <button type="button" className="edit-button" onClick={handleSaveFormData}>Save</button>
        <button type="button" className="edit-button jh-mx-xs" onClick={handleResetFormData}>Reset</button>
        <button type="button" className="edit-button" onClick={handleCancel}>Cancel</button>
      </ul>
      <TextInput label="제목" value={formData.title} onChange={setFormData} name="title" formData={formData}/>
      <DateInput label="시작 날짜" value={formData.start} onChange={setFormData} name="start" formData={formData}/>
      <DateInput label="종료 날짜" value={formData.end} onChange={setFormData} name="end" formData={formData}/>
      <SelectboxInput label="상태" value={formData.status} onChange={setFormData} name="status" formData={formData} list={statusList} />
      <TextareaInput label="내용" value={formData.content} onChange={setFormData} name="content" formData={formData} maxLength={200} rows={5} />
    </form>
  )
}

export default TodoEdit;