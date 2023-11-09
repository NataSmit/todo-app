import React, { useState } from "react";
import "./Todo.css";
import { useSelector, useDispatch } from "react-redux";
import {
  handleTodoInfoBoxClick,
  toggleComplete,
  test
} from "../../store/slices/TaskSlice";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {
  Checkbox,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  function toggleTodoComplete(id) {
    dispatch(toggleComplete({ id }));
  }

  function handleCheckboxClick(e) {
    e.stopPropagation();
  }

  function handleTodoClick(e, id) {
    dispatch(handleTodoInfoBoxClick({ id }));
    
  }


  return (
    <>
      <ListItem
        sx={{
          border: "1px solid grey",
          borderRadius: 3,
          mb: 1,
          backgroundColor: "white",
        }}
        onClick={(e, id) => handleTodoClick(e, todo.id)}
      >
        <ListItemIcon onClick={handleCheckboxClick}>
          <Checkbox
            edge="start"
            checked={todo.completed}
            onChange={(id) => toggleTodoComplete(todo.id)}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </Typography>
          }
        />
      </ListItem>
    </>
  );
}
