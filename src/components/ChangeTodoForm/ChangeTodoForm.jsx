import { FormControl, Input, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useSelector, useDispatch } from "react-redux";
import { changeTodo, toggleComplete, addComment } from "../../store/slices/TaskSlice";

export default function ChangeTodoForm({ title, completed, comment, id }) {
  const [todo, setTodo] = useState(title);
  
  const dispatch = useDispatch();

  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(
      changeTodo({
        title: todo,
        id,
        completed,
        comment
      })
    );
  }


  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  useEffect(() => {
    setTodo(title);
  }, [title]);


  useEffect(() => {
    console.log(completed)
  }, [completed])

  function handleToggle(event) {
    console.log(id)
    dispatch(toggleComplete({ id }));
  }


  function onBlur() {
    dispatch(
      changeTodo({
        title: todo,
        id,
        completed,
        comment
      })
    );
  }

  return (
    <form onSubmit={handleFormSubmit}>

      <FormControl variant="standard">
        <OutlinedInput
          id="input-with-icon-adornment"
          sx={{
            backgroundColor: "white",
            textDecoration: completed ? "line-through" : "",
          }}
          value={todo}
          onChange={handleInputChange}
          onBlur={onBlur}
          startAdornment={
            <InputAdornment position="start">
              <Checkbox
                checked={completed}
                onChange={(event, id) => handleToggle(id)}
                
              />
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
    
  );
}
