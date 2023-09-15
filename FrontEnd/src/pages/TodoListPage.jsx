import { useEffect, useState } from "react";
import CustomCalendar from "../componenets/todo/CustomCalendar";
import TodoList from "../componenets/todo/TodoList";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setFocusDate } from "../stores/actions/todo";

const TodoListPage = () => {
  const {focusDate} = useSelector((state)=>state.todo)
  const dispatch = useDispatch();
  useEffect(()=>{
    const today = dayjs().format('YYYY-MM-DD');
    dispatch(setFocusDate(today))
  },[])
  return (
    <div className="todo-list-page">
      <div className="todo-calendar-wrap-box">
        <CustomCalendar />
      </div>
      <div className="todo-list-wrap-box jh-pa-sm">
        <TodoList today={focusDate}/>
      </div>
    </div>
  );
};

export default TodoListPage;
