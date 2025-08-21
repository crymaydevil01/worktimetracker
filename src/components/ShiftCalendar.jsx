import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function ShiftCalendar() {
  const [events, setEvents] = useState([
    {
      title: "6.5 hrs Worked",
      start: new Date(2025, 7, 20, 10, 0), // Aug 20, 2025 - 10:00 AM
      end: new Date(2025, 7, 20, 16, 30),  // Aug 20, 2025 - 4:30 PM
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

  // Handle adding events when user clicks/drag-selects a date range
  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Enter shift details (e.g. 8 hrs Worked)");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div className="p-6" style={{ height: "80vh" }}>
      <h2 className="text-xl font-bold mb-4">Work Shift Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        style={{ height: "100%", border: "1px solid #ddd", borderRadius: "8px" }}
      />
    </div>
  );
}
