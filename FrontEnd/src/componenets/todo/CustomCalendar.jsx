import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useCallback, useEffect, useState } from 'react'

const CustomCalendar = () => {
  const [events, setEvents] = useState([])

  useEffect(()=>{
    setEvents([{title:'test00', date:'2023-09-15'},{title:'test01', date:'2023-09-15'},{title:'test01', date:'2023-09-15'},{title:'test01', date:'2023-09-15'},{title:'test02', date:'2023-09-16'}]);
  }, [])

  const handleOnClick = useCallback(()=>{
    setEvents([{title:'test00', date:'2023-09-15'},{title:'test01', date:'2023-09-17'},{title:'test01', date:'2023-09-17'},{title:'test01', date:'2023-09-17'},{title:'test02', date:'2023-09-17'}]);
  }, [])
  

  return (
    <>
    <FullCalendar 
      selectable
      plugins={[dayGridPlugin]}
      headerToolbar={{
        left: 'prevYear prev',
        center: 'title',
        right:'next nextYear',
      }}
      initialView="dayGridMonth"
      events= {events}
      dayMaxEvents={3}
      contentHeight={500}
    />
    <button onClick={handleOnClick}>새 data init test</button>
    </>
  )
}

export default CustomCalendar;