import React, { useState } from "react";
import "./Todo.css";
import Checkbox from "@mui/material/Checkbox";
import Sidebar from "../Sidebar/Sidebar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Todo({ todo }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checked, setChecked] = useState(todo.completed);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  function handleTodoClick() {
    setSidebarOpen(true);
  }

  return (
    <>
      <li className={'todo checked ? "todoCompleted" : ""'} >
        <Checkbox checked={checked} onChange={e => handleChange(e)} />
        <div onClick={handleTodoClick}>
          {todo.title}
        </div>
        
      </li>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        todo={todo}
      />
    </>
  );
}
