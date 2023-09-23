import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { setFocusDate, setTodoList } from '../../stores/actions/todo';

const CustomCalendar = () => {
  const {todoList, curStatus, focusDate} = useSelector((state)=>state.todo);
  const dispatch = useDispatch()

  const handleFocusDate = useCallback((v)=>{
    const focusDate = dayjs(v.date).format('YYYY-MM-DD');
    dispatch(setFocusDate(focusDate))
    dispatch(setTodoList(curStatus, focusDate))
  }, [dispatch, curStatus])
  
  return (
    <FullCalendar 
      selectable
      plugins={[dayGridPlugin, interactionPlugin ]}
      headerToolbar={{
        left: 'prevYear prev',
        center: 'title',
        right:'next nextYear',
      }}
      initialView="dayGridMonth"
      events= {todoList}
      dayMaxEvents={3}
      contentHeight={500}
      dateClick={handleFocusDate}
    />
  )
}

export default CustomCalendar;