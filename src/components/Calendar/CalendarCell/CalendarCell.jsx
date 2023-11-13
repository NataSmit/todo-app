import React from "react";

export default function CalendarCell({ date = null, isCurrentDate = false, handleCalendarCellClick, selected }) {
  return (
    <div
      className={`calendarCell ${
        isCurrentDate ? "calendarCellCurrentDay" : ""  
      } ${selected ? 'calendarCellSelected' : ''}`}
      onClick={handleCalendarCellClick ? () => handleCalendarCellClick(date) : undefined}
    >
      {date}
    </div>
  );
}
