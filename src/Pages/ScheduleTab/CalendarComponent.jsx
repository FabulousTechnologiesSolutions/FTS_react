import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // for month/year views
import timeGridPlugin from '@fullcalendar/timegrid'; // for week/day views
import interactionPlugin from '@fullcalendar/interaction'; // for interactions


const CalendarComponent = () => {
  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2024-09-01' },
    { title: 'Event 2', date: '2024-09-02' }
  ]);

  const handleDateClick = (info) => {
    alert(`Date: ${info.dateStr}`);
  };

  const handleEventClick = (info) => {
    alert(`Event: ${info.event.title}`);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,yearView' // added custom yearView
        }}
        views={{
          yearView: {
            type: 'dayGrid',
            duration: { years: 1 }, // custom year view
            buttonText: 'Year' // text for the button
          }
        }}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        selectable={true}
      />
    </div>
  );
};

export default CalendarComponent;
