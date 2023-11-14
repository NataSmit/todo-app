import React from "react";
import "./CalendarCell.css";

export default function CalendarCell({
  date,
  isCurrentDate = false,
  handleCalendarCellClick,
  selected,
}) {
  return (
    <div
      className={`calendarCell ${
        isCurrentDate ? "calendarCellCurrentDay" : ""
      } ${selected ? "calendarCellSelected" : ""}`}
      onClick={
        handleCalendarCellClick
          ? () => handleCalendarCellClick(date)
          : undefined
      }
    >
      {date}
    </div>
  );
}
