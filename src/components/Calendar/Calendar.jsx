import { DateTime } from "luxon";
import "./Calendar.css";
import { getDates, getMonthName } from "../../utils/utils";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { weekNames } from "../../utils/constants/calendarConstants";
import CalendarCell from "./CalendarCell/CalendarCell";
import { useDispatch } from "react-redux";
import { addDueDate } from "../../store/slices/TaskSlice";

export default function Calendar({
  currentDate,
  calendarVisible,
  onChange,
  id,
  dueDate,
  setCalendarVisible,
}) {
  const dispatch = useDispatch();
  const [dates, setDates] = useState();
  const calendarClass = classNames({
    calendarVisible: calendarVisible,
    calendarHidden: !calendarVisible,
  });
  const [selectedDate, setSelectedDate] = useState(false)

  const [cellsBefore, setSellsBefore] = useState(
    currentDate.startOf("month").weekday - 1
  );
  const [cellsAfter, setSellsAfter] = useState(
    7 - currentDate.endOf("month").weekday
  );

  useEffect(() => {
    setDates(getDates(currentDate));
    setSellsBefore(currentDate.startOf("month").weekday - 1);
    setSellsAfter(7 - currentDate.endOf("month").weekday);
  }, [currentDate]);

  useEffect(() => {
    setSelectedDate(false)
  }, [currentDate.month])

  function handleBackBtnClick() {
    onChange(currentDate.minus({ month: 1 }));
  }

  function handleForwardBtnClick() {
    onChange(currentDate.plus({ month: 1 }));
  }

  function handleCalendarCellClick(date) {
    onChange(DateTime.fromObject({ month: currentDate.month, day: date }));
    setSelectedDate(true)
  }

  function handleDueDateSubmit() {
    dispatch(addDueDate({ id, dueDate: currentDate.toISO() }));
    setCalendarVisible(false);
  }

  function closeCalendar() {
    setCalendarVisible(false);
  }

  return (
    <div className={calendarClass}>
      <div className="calendarContainer">
        <div className="calendarHeader">
          <button onClick={handleBackBtnClick} className="calendarNavigationButton">{"<"}</button>
          <div>{`${getMonthName(currentDate.toJSDate().getMonth())} ${
            currentDate.year
          }`}</div>
          <button onClick={handleForwardBtnClick} className="calendarNavigationButton">{">"}</button>
        </div>
        <div className="calendarBody">
          {weekNames.map((weekName) => (
            <div className="calendarCell" key={weekName}>
              {weekName}
            </div>
          ))}
          {Array.from({ length: cellsBefore }).map((_, i) => (
            <CalendarCell key={i} />
          ))}
          {dates &&
            dates.map((date) => {
              const isCurrentDate =
                date === DateTime.now().day &&
                currentDate.month === DateTime.now().month;
              const isSelected = date === currentDate.day && selectedDate;
              return (
                <CalendarCell
                  key={date}
                  date={date}
                  isCurrentDate={isCurrentDate}
                  handleCalendarCellClick={handleCalendarCellClick}
                  selected={isSelected}
                />
              );
            })}
          {Array.from({ length: cellsAfter }).map((_, i) => (
            <CalendarCell key={i} />
          ))}
        </div>
      </div>
      <div className="calendarButtons">
        <button onClick={handleDueDateSubmit}>Сохранить</button>
        <button onClick={closeCalendar}>Отмена</button>
      </div>
    </div>
  );
}
