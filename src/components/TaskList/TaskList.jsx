import React from "react";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import "./TaskList.css";
import List from "@mui/material/List";
import { Box, Container } from "@mui/material";

export default function TaskList() {
  const todos = useSelector((state) => state.todos);
  console.log("todos from list", todos);

  return (
    <Box sx={{ flexGrow: 1, flexShrink: 1, flexBasis: "auto" }}>
      <List >
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </List>
    </Box>
  );
}
