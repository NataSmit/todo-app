import React, { useState } from "react";
import "./Todo.css";
import Checkbox from "@mui/material/Checkbox";
import Sidebar from "../Sidebar/Sidebar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSelector, useDispatch } from "react-redux"; 
import { toggleComplete } from '../../store/slices/TaskSlice'

export default function Todo({ todo }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  const dispatch = useDispatch()

  function toggleTodoComplete(id) {
    dispatch(toggleComplete({id}))
  }

  function handleTodoClick() {
    setSidebarOpen(true);
  }

  return (
    <>
      <li className={'todo checked ? "todoCompleted" : ""'} >
        <Checkbox checked={todo.completed} onChange={id => toggleTodoComplete(todo.id)} />
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
