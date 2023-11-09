import React from "react";
import Form from "../Form/Form";
import { Box, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ChangeTodoForm from "../ChangeTodoForm/ChangeTodoForm";
import { closeTodoInfoBox, deleteTodo } from "../../store/slices/TaskSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import CloseIcon from '@mui/icons-material/Close';
import DueDateForm from '../DueDateForm/DueDateForm'

export default function TodoInfoBox() {
  const selectedTodo = useSelector((state) => state.selectedTodo);
  const dispatch = useDispatch();
  console.log("selectedTodo", selectedTodo);
  function handleTodoInfoBoxClose() {
    dispatch(closeTodoInfoBox());
  }
  
  function handleTodoDelete(id) {
    dispatch(deleteTodo({id}))
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <Box sx={{flexGrow: 1, flexShrink: 1, flexBasis: "auto"}}>
        <IconButton aria-label="delete" color="primary" onClick={handleTodoInfoBoxClose}>
        <CloseIcon />
      </IconButton>
        {selectedTodo && <ChangeTodoForm title={selectedTodo.title} id={selectedTodo.id} completed={selectedTodo.completed || false} comment={selectedTodo.comment}/>}
        {selectedTodo && <AddCommentForm title={selectedTodo.title} id={selectedTodo.id} completed={selectedTodo.completed || false} comment={selectedTodo.comment}  />}
        {selectedTodo && <DueDateForm />}
      </Box>
      <Box >
      <IconButton aria-label="delete" color="primary" onClick={() => handleTodoDelete(selectedTodo.id)}>
        <DeleteIcon />
      </IconButton>
      </Box>   
    </Box>
  );
}
