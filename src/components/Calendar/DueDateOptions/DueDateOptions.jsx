import React from "react";
import "./DueDateOptions.css";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function DueDateOptions({dueDateOptionsVisible, handleCalendarVisibility}) {
  return (
    // <div className='optionsContainer'>
    //   <div className=''>Сегодня</div>
    //   <div>Завтра</div>
    //   <div>Следующая неделя</div>
    //   <div>Выбрать дату</div>
    // </div>
    <Paper elevation={2} sx={{ width: 200, backgroundColor: "white", display: dueDateOptionsVisible ? 'block' : 'none', position: 'absolute', top: "100%", left: '30px'}}>
      <Stack >
        <div className="option">Сегодня</div>
        <div className="option">Завтра</div>
        <div className="option">Следующая неделя</div>
        <div className="option" onClick={handleCalendarVisibility}>Выбрать дату</div>
      </Stack>
    </Paper>
  );
}
