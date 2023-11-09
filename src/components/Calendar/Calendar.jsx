import { DateTime, Interval } from "luxon";
import './Calendar.css'

import React, { useState } from "react";

export default function Calendar() {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const weekNames = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  const days = []
  
  const [date, setDate] = useState(DateTime.now());
  // const startOfMonth = DateTime.fromJSDate(
  //   DateTime.fromJSDate(date).startOf("month").toJSDate()
  // )
  //   .startOf("week")
  //   .toJSDate();
  // const endOfMonth = DateTime.fromJSDate(
  //   DateTime.fromJSDate(date).endOf("month").toJSDate()
  // )
  //   .endOf("week")
  //   .toJSDate();
  // const intervalLength = Interval.fromDateTimes(startOfMonth, endOfMonth).count(
  //   "days"
  // );
  
  const startOfMonth = date.startOf('month')
  const endOfMonth = date.endOf('month')
  const diff = endOfMonth.diff(startOfMonth)
  console.log("startOfMonth", startOfMonth);
  console.log("endOfMonth", endOfMonth);
  const intervalLength = Interval.fromDateTimes(startOfMonth, endOfMonth).count('days')
  console.log('intervalLength', intervalLength)
  const arr = []
  for (let i = 0; i < intervalLength; i++) {
    arr.push(DateTime.fromJSDate(startOfMonth).plus({ day: i }).toJSDate())
}

  return (
    <div className="calendar">
      <div className="calendarContainer">
        <div className="calenderHeader">
          <div>{'<'}</div>
          <div>November 2023</div>
          <div>{'>'}</div>
        </div>
        <div className="calenderBody">
          {weekNames.map((weekName) => (<div className="calenderGridBox">{weekName}</div>))}
          {arr.map((_, i) => (<div className="calenderGridBox">{i}</div>))}
          
        </div>
      </div>
    </div>
  );
}
