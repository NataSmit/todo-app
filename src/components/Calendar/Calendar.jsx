import { DateTime, Interval } from "luxon";
import "./Calendar.css";
import {getDates, getMonthName} from '../../utils/utils'
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { weekNames } from '../../utils/constants/calendarConstants'
import CalendarCell from './CalendarCell/CalendarCell'
import { useDispatch, useSelector } from "react-redux";
import { addDueDate } from '../../store/slices/TaskSlice'

export default function Calendar({currentDate, calendarVisible, onChange, id, dueDate, setCalendarVisible}) {
  
  const calendarClass = classNames({
    calendarVisible: calendarVisible,
    calendarHidden: !calendarVisible,
  })
  const calendarCellClass = classNames({
    calendarCell: true,
    calendarCellCurrentDay: currentDate.toLocaleString() === DateTime.now().toLocaleString() ,
  })
  //const [dueDate, setDueDate] = useState(currentDate);
  
  // const [testDate, setTestDate] = useState(DateTime.now()) 
  //  console.log("day current ", currentDate.toLocaleString({month: 'long', year: 'numeric'}));
  // console.log("day now ", DateTime.now().toLocaleString());
  // const cellsBefore = testDate.startOf('month').toJSDate().getDay() - 1
  // const cellsAfter = testDate.endOf('month').toJSDate().getDay() - 1
  // console.log('cellsAfter', cellsAfter)
  const dispatch = useDispatch()
  const [testDate, setTestDate] = useState(currentDate) 
  // console.log("luxon", testDate.startOf('month').toJSDate().getDay());
  const [cellsBefore, setSellsBefore] = useState(currentDate.startOf('month').weekday - 1)
  const [cellsAfter, setSellsAfter] = useState(7 - currentDate.endOf('month').weekday)
  // console.log('cellsBefore', cellsBefore)
  // console.log('cellsAfter', cellsAfter)
  // console.log('!!!', Interval.before(testDate, {month: 1}).toLocaleString())
  // console.log('<<<<', testDate.daysInMonth)
  // console.log('???', testDate.minus({month: 1}).toFormat('LLLL yyyy'))
  //const [prevMonth, setPrevMonth] = useState()

  function handleBackBtnClick() {
    onChange(currentDate.minus({month: 1}))
  }

  function handleForwardBtnClick() {
    onChange(currentDate.plus({month: 1}))
  }
  
  const [dates, setDates] = useState()
  useEffect(() => {
    setDates(getDates(currentDate))
    setSellsBefore(currentDate.startOf('month').weekday - 1)
    setSellsAfter(7 - currentDate.endOf('month').weekday)
  }, [currentDate])

  function handleCalendarCellClick(date) {
    onChange(DateTime.fromObject({month: currentDate.month, day: date}))
  }

  function handleDueDateSubmit() {
    dispatch(addDueDate({id, dueDate: currentDate.toISO()}))
    setCalendarVisible(false)
  }

  

  return (
    <div className={calendarClass}>
      <div className="calendarContainer">
        <div className="calendarHeader">
          <div onClick={handleBackBtnClick} >{"<"}</div>
          <div>{`${getMonthName(currentDate.toJSDate().getMonth())} ${currentDate.year}`}</div>
          <div onClick={handleForwardBtnClick}>{">"}</div>
        </div>
        <div className="calendarBody">
          {weekNames.map((weekName) => (
            <div className="calendarCell" key={weekName}>{weekName}</div>
          ))}
          {Array.from({length: cellsBefore}).map((_, i) => (<CalendarCell key={i}/>))}
          {dates && dates.map((date) => {
            const isCurrentDate = date === DateTime.now().day && currentDate.month === DateTime.now().month
            const selected = date === currentDate.day 
            return ( <CalendarCell key={date} date={date} isCurrentDate={isCurrentDate} handleCalendarCellClick={handleCalendarCellClick} selected={selected} />)
          })}
          {Array.from({length: cellsAfter}).map((_, i) => (<CalendarCell key={i}/>))}
        </div>
      </div>
      <div className="calendarButtons">
        <button onClick={handleDueDateSubmit}>Сохранить</button>
        <button>Отмена</button>
      </div>
    </div>
  );
}
