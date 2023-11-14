import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/TaskSlice";

export default function CreateTodoForm({ title }) {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(title);
  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function saveTodo(e) {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  }

  return (
    <form onSubmit={saveTodo}>
      <TextField
        value={todo}
        onChange={handleInputChange}
        sx={{ width: "100%", backgroundColor: "white" }}
        placeholder="Добавить задачу"
      />
    </form>
  );
}
