import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"
import { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { setFocusDate, setTodoList } from '../../stores/actions/todo';
import { ThunkDispatch } from '../../types/action';
import { todoInitialState } from '../../types/todo';

const CustomCalendar = () => {
  const {todoList, curStatus, focusDate} = useSelector((state: todoInitialState)=>state.todo);
  const dispatch: ThunkDispatch = useDispatch()
  const myCalendar = useRef(null);
  const handleFocusDate = useCallback((v: DateClickArg )=>{
    const focusDate = dayjs(v.date).format('YYYY-MM-DD');
    dispatch(setFocusDate(focusDate))
    dispatch(setTodoList(curStatus, focusDate))
  }, [dispatch, curStatus])

  const customButton = {
    prevYear:{
      click:()=>{
        const newDate = dayjs(focusDate).subtract(1, 'year').format('YYYY-MM-DD');
        dispatch(setFocusDate(newDate))
        dispatch(setTodoList(curStatus, newDate))
        const api = myCalendar.current.getApi();
        api.prevYear();
      }
    },
    prev:{
      click:()=>{
        const newDate = dayjs(focusDate).subtract(1, 'month').format('YYYY-MM-DD');
        dispatch(setFocusDate(newDate))
        dispatch(setTodoList(curStatus, newDate))
        const api = myCalendar.current.getApi();
        api.prev();
      }
    },
    next:{
      click:()=>{
        const newDate = dayjs(focusDate).add(1, 'month').format('YYYY-MM-DD');
        dispatch(setFocusDate(newDate))
        dispatch(setTodoList(curStatus, newDate))
        const api = myCalendar.current.getApi();
        api.next();
      }
    },
    nextYear:{
      click:()=>{
        const newDate = dayjs(focusDate).add(1, 'year').format('YYYY-MM-DD');
        dispatch(setFocusDate(newDate))
        dispatch(setTodoList(curStatus, newDate))
        const api = myCalendar.current.getApi();
        api.nextYear();
      }
    },
  }

  return (
    <FullCalendar 
      ref={myCalendar}
      selectable
      plugins={[dayGridPlugin, interactionPlugin ]}
      headerToolbar={{
        left: 'prevYear prev',
        center: 'title',
        right:'next nextYear',
      }}
      customButtons={customButton}
      initialView="dayGridMonth"
      events= {todoList}
      dayMaxEvents={3}
      contentHeight={500}
      dateClick={handleFocusDate}
    />
  )
}

export default CustomCalendar;