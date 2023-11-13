import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { DateTime, Interval } from "luxon";
import "./DueDateForm.css";
import DueDateOptions from "../Calendar/DueDateOptions/DueDateOptions";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addDueDate, deleteDueDate } from "../../store/slices/TaskSlice";

export default function DueDateForm({ id, dueDate }) {
  //const [date, setDate] = useState();
  const dispatch = useDispatch();
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(DateTime.now());
  const [dueDateOptionsVisible, setDueDateOptionsVisible] = useState(false);
  console.log("dueDate", dueDate);

  function handleCalendarVisibility() {
    console.log(" handleCalendarVisibility clicked!!!");
    setDueDateOptionsVisible(false);
    setCalendarVisible(!calendarVisible);
  }

  function handleDueDateOptionsVisibility() {
    setDueDateOptionsVisible(!dueDateOptionsVisible);
  }

  function handleDeleteDueDate() {
    dispatch(deleteDueDate({ id }));
  }

  const dueDateValue = `Срок: ${
    dueDate &&
    DateTime.fromISO(dueDate).toLocaleString({
      weekday: "short",
      day: "2-digit",
      month: "short",
    })
  }`;

  return (
    <>
      <form style={{ paddingTop: "30px" }}>
        <Box sx={{ position: "relative" }}>
          <div className="dueDateBox">
            <p onClick={handleDueDateOptionsVisibility}>{`${
              dueDate ? dueDateValue : "Добавить дату выполнения"
            }`}</p>
            {dueDate ? (
              <IconButton onClick={handleDeleteDueDate}>
                <CloseIcon />
              </IconButton>
            ) : null}
          </div>

          <DueDateOptions
            dueDateOptionsVisible={dueDateOptionsVisible}
            handleCalendarVisibility={handleCalendarVisibility}
          />
        </Box>

        {/* <input
          value={currentDate.toLocaleString()}
          onClick={handleCalendarVisibility}
          placeholder="Add due date"
        /> */}
      </form>
      {/* <div styles={{height: '20px'}} onClick={handleCalendarVisibility}>Add due date</div> */}
      <Calendar
        calendarVisible={calendarVisible}
        currentDate={currentDate}
        onChange={setCurrentDate}
        id={id}
        dueDate={dueDate}
        setCalendarVisible={setCalendarVisible}
      />
    </>
  );
}
