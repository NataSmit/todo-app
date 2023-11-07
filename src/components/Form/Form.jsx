import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/TaskSlice";

export default function Form() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({});
  function handleInputChange(e) {
    setTodo({ title: e.target.value, completed: false });
  }

  console.log(todo);

  function saveTodo(e) {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo({title: '', completed: false});
  }

  return (
    <form onSubmit={saveTodo}>
      <TextField value={todo.title} onChange={handleInputChange} />
    </form>
  );
}
