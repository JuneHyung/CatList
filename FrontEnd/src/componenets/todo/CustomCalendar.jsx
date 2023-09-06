import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const CustomCalendar = () => {
  return (
    <FullCalendar plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"/>
  )
}

export default CustomCalendar;