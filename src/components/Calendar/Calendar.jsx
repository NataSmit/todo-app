import { DateTime, Interval } from "luxon";
import "./Calendar.css";

import React, { useEffect, useState } from "react";

export default function Calendar({currentDate, calendarVisible, onChange}) {
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
  const days = [];

  const [date, setDate] = useState(currentDate);
  console.log('prop', currentDate)
  
  // const [testDate, setTestDate] = useState(DateTime.now()) 
  // console.log("luxon", testDate.startOf('month').toJSDate().getDay());
  // const cellsBefore = testDate.startOf('month').toJSDate().getDay() - 1
  // const cellsAfter = testDate.endOf('month').toJSDate().getDay() - 1
  // console.log('cellsAfter', cellsAfter)

  const [testDate, setTestDate] = useState(currentDate) 
  console.log("luxon", testDate.startOf('month').toJSDate().getDay());
  // const cellsBefore = testDate.startOf('month').weekday - 1
  // const cellsAfter = 7 - testDate.endOf('month').weekday
  const [cellsBefore, setSellsBefore] = useState(currentDate.startOf('month').weekday - 1)
  const [cellsAfter, setSellsAfter] = useState(7 - currentDate.endOf('month').weekday)
  console.log('cellsBefore', cellsBefore)
  console.log('cellsAfter', cellsAfter)
  console.log('!!!', Interval.before(testDate, {month: 1}).toLocaleString())
  console.log('<<<<', testDate.daysInMonth)
  console.log('???', testDate.minus({month: 1}).toFormat('LLLL yyyy'))
  const [prevMonth, setPrevMonth] = useState()

  function handleBackBtnClick() {
    onChange(currentDate.minus({month: 1}))
  }

  function handleForwardkBtnClick() {
    onChange(currentDate.plus({month: 1}))
  }

  console.log('prevMonth', prevMonth)

  function getDates(date) {
    const startOfMonth = date.startOf("month");
    const endOfMonth = date.endOf("month");
    console.log('startOfMonth', startOfMonth)
    console.log('endOfMonth', endOfMonth)
    console.log('weekday start', startOfMonth.weekday)
    console.log('weekday end', endOfMonth.weekday)
    const intervalLength = Interval.fromDateTimes(
      startOfMonth,
      endOfMonth
    ).count("days");
    const arr = [];
    for (let i = 0; i < intervalLength; i++) {
      const date = i + 1
      arr.push(date);
    }
    
    return arr
  }
  const [dates, setDates] = useState()
  useEffect(() => {
    setDates(getDates(currentDate))
    setSellsBefore(currentDate.startOf('month').weekday - 1)
    setSellsAfter(7 - currentDate.endOf('month').weekday)
  }, [currentDate])

  // const startOfMonth = date.startOf("month");
  // const endOfMonth = date.endOf("month");
  // const diff = endOfMonth.diff(startOfMonth, "days"); // хрень
  
  // console.log("startOfMonth", startOfMonth);
  // console.log("endOfMonth", endOfMonth);
  // const intervalLength = Interval.fromDateTimes(startOfMonth, endOfMonth).count(
  //   "days"
  // );
  // console.log("intervalLength", intervalLength);
  // const arr = [];
  // for (let i = 0; i < intervalLength; i++) {
  //   const date = i + 1
  //   console.log("date", date);
  //   arr.push(date);
  // }


  return (
    <div className={`calendar ${calendarVisible ? 'calendarVisible' : 'calendarHidden'}`}>
      <div className="calendarContainer">
        <div className="calenderHeader">
          <div onClick={handleBackBtnClick} >{"<"}</div>
          <div>{currentDate.toFormat('LLLL yyyy')}</div>
          <div onClick={handleForwardkBtnClick}>{">"}</div>
        </div>
        <div className="calenderBody">
          {weekNames.map((weekName) => (
            <div className="calenderGridBox">{weekName}</div>
          ))}
          {Array.from({length: cellsBefore}).map((v) => (<div className="calenderGridBox"></div>))}
          {dates && dates.map((date) => (
            <div className="calenderGridBox">{date}</div>
          ))}
          {Array.from({length: cellsAfter}).map((v) => (<div className="calenderGridBox"></div>))}
        </div>
      </div>
    </div>
  );
}
