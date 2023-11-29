import { useEffect, useState } from "react";
import CustomCalendar from "../componenets/todo/CustomCalendar";
import TodoList from "../componenets/todo/TodoList";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setFocusDate } from "../stores/actions/todo";
import { todoInitialState } from "../types/todo";
import { ThunkDispatch } from "../types/action";

const TodoListPage = () => {
  const {focusDate} = useSelector((state:todoInitialState)=>state)
  const dispatch: ThunkDispatch = useDispatch();
  useEffect(()=>{
    const today = dayjs().format('YYYY-MM-DD');
    dispatch(setFocusDate(today))
  },[dispatch])
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
