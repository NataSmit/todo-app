import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, changeTodo } from "../../store/slices/TaskSlice";


export default function Form({title}) {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(title);
  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function saveTodo(e) {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo('');
  }


  return (
    <form onSubmit={saveTodo} >
      <TextField value={todo} onChange={handleInputChange} sx= {{width: '100%', backgroundColor: 'white'}} />
    </form>
  );
}
