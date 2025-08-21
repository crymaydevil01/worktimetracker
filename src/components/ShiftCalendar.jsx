import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function ShiftCalendar() {
  const [events, setEvents] = useState([
    {
      title: "6.5 hrs Worked",
      start: new Date(2025, 7, 20, 10, 0),
      end: new Date(2025, 7, 20, 16, 30),
    },
    {
      title: "Not Worked",
      start: new Date(2025, 7, 21, 9, 0),
      end: new Date(2025, 7, 21, 17, 0),
    },
    {
      title: "Payday 💵",
      start: new Date(2025, 7, 25),
      end: new Date(2025, 7, 25),
      allDay: true,
    },
  ]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Enter shift details (e.g. 8 hrs Worked)");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div className="w-full h-full">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        style={{ height: "100%", minHeight: "80vh" }}
      />
    </div>
  );
}
