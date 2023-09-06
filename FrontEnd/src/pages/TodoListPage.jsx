import { useEffect, useState } from "react";
import CustomCalendar from "../componenets/todo/CustomCalendar";
import TodoList from "../componenets/todo/TodoList";
import dayjs from "dayjs";

const TodoListPage = () => {
  const [focusDate, setFocusDate] = useState('')
  useEffect(()=>{
    const today = dayjs().format('YYYY-MM-DD');
    setFocusDate(today);
  },[])
  return (
    <div className="todo-list-page">
      <div className="todo-calendar-wrap-box">
        <CustomCalendar />
      </div>
      <div className="todo-list-wrap-box">
        <p>{focusDate}</p>
        <TodoList />
      </div>
    </div>
  );
};

export default TodoListPage;
