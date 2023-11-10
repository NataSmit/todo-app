import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../store/slices/TaskSlice";

export default function AddCommentForm({ title, completed, comment, id }) {
  const [commentValue, setCommentValue] = useState(comment);
  const dispatch = useDispatch();
  function handleCommentChange(e) {
    setCommentValue(e.target.value);
  }

  function handleCommentSubmit(e, id, comment) {
    e.preventDefault();
    dispatch(addComment({ id, comment}));
  }

   useEffect(() => {
    setCommentValue(comment)
   }, [comment])

  
  return (
    <form style={{ paddingTop: "20px" }} onSubmit={(e) => handleCommentSubmit(e, id, commentValue)}>
      <TextField
        value={commentValue}
        onChange={handleCommentChange}
        label="Добавить заметку"
        variant="outlined"
      />
    </form>
  );
}
