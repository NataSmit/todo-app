import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { DateTime, Interval } from "luxon";

export default function DueDateForm() {
  //const [date, setDate] = useState();
  const [calendarVisible, setCalendarVisible] = useState(false)
  const [currentDate, setCurrentDate] = useState(DateTime.now());


  // function handleDateChange(e) {
  //   setDate(e.target.value);
  // }
  // console.log("date", date);
  
  function handleCalendarVisibility() {
    setCalendarVisible(!calendarVisible)
  }

  return (
    <>
      <form>
        <input value={currentDate.toLocaleString()} onClick={handleCalendarVisibility} placeholder="Add due date" />
      </form>
      {/* <div styles={{height: '20px'}} onClick={handleCalendarVisibility}>Add due date</div> */}
      <Calendar calendarVisible={calendarVisible} currentDate={currentDate} onChange={setCurrentDate} />
    </>
  );
}
