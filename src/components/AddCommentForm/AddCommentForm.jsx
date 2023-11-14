import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../store/slices/TaskSlice";

export default function AddCommentForm({ title, completed, comment, id }) {
  const [commentValue, setCommentValue] = useState(comment);
  const dispatch = useDispatch();

  useEffect(() => {
    setCommentValue(comment);
  }, [comment]);

  function handleCommentChange(e) {
    setCommentValue(e.target.value);
  }

  function handleCommentSubmit(e, id, comment) {
    e.preventDefault();
    dispatch(addComment({ id, comment }));
  }

  function onBlur() {
    dispatch(addComment({ id, comment: commentValue }))
  }

  return (
    <form
      style={{ paddingTop: "20px" }}
      onSubmit={(e) => handleCommentSubmit(e, id, commentValue)}
    >
      <TextField
        value={commentValue}
        onChange={handleCommentChange}
        label="Добавить заметку"
        variant="outlined"
        onBlur={onBlur}
      />
    </form>
  );
}
