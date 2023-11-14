import React from "react";
import "./CalendarCell.css";
import classNames from "classnames";

export default function CalendarCell({
  date,
  isCurrentDate = false,
  handleCalendarCellClick,
  selected,
}) {
  const calendarCellClass = classNames({
    calendarCell: true,
    calendarCellCurrentDay: isCurrentDate,
    calendarCellSelected: selected,
  });

  return (
    <div
      className={calendarCellClass}
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
