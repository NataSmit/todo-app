import { FormControl, Input, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useSelector, useDispatch } from "react-redux";
import { changeTodo, toggleComplete } from "../../store/slices/TaskSlice";

export default function ChangeTodoForm({ selectedTodo }) {
  const [todo, setTodo] = useState(selectedTodo.title);
  console.log('todo in box', todo)
  const [checked, setChecked] = useState(selectedTodo.completed)
  const dispatch = useDispatch();
  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(changeTodo({ title: todo, id: selectedTodo.id, completed: checked}));
  }

  console.log('selectedTodo', selectedTodo)

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleCheckboxToggle() {
    setChecked((prev) => !prev)
    
  }
  useEffect(() => {
    setTodo(selectedTodo.title)
    setChecked(selectedTodo.completed)
  }, [selectedTodo])

   useEffect(() => {
     dispatch(changeTodo({ title: todo, id: selectedTodo.id, completed: selectedTodo.completed}))
    
   }, [checked])

  function handleToggle(id) {
    dispatch(toggleComplete({id}))
  }

  console.log('selectedTodo.completed', selectedTodo.completed)

  return (
    <form onSubmit={handleFormSubmit}>
      {/* <Checkbox />
      <TextField value={todo} onChange={handleInputChange} sx= {{width: '100%', backgroundColor: 'white'}} /> */}
      
        <FormControl variant="standard" >
          <OutlinedInput
            id="input-with-icon-adornment"
            sx={{ backgroundColor: "white", textDecoration: checked ? 'line-through' : '' }}
            value={todo}
            onChange={handleInputChange}
            startAdornment={
              <InputAdornment position="start">
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxToggle}
                  //onChange={(id) => handleToggle(selectedTodo.id)}
                 />
              </InputAdornment>
            }
          />
        </FormControl>
      
    </form>
  );
}
