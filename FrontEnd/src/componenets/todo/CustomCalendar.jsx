import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { setFocusDate, setTodoList } from '../../stores/actions/todo';

const CustomCalendar = () => {
  const {todoList} = useSelector((state)=>state.todo);
  const dispatch = useDispatch()

  const handleFocusDate = useCallback((v)=>{
    const focusDate = dayjs(v.date).format('YYYY-MM-DD');
    const testList = [
      {id: '0', title:'test00', start:'2023-09-15', end: '2023-09-18', type: 'todo'},
      {id: '1', title:'test01', start:'2023-09-17', end: '2023-09-18', type: 'todo'},
      {id: '2', title:'test02', start:'2023-09-17', end: '2023-09-18', type: 'doing'},
      {id: '3', title:'test03', start:'2023-09-17', end: '2023-09-18', type: 'done'},
      {id: '4', title:'test04', start:'2023-09-17', end: '2023-09-27',type: 'todo'}
    ];
    dispatch(setFocusDate(focusDate))
    dispatch(setTodoList(testList))
  }, [dispatch])
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