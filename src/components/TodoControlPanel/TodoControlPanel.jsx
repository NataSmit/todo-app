import { Container } from "@mui/material";
import React from "react";
import TodoInfoBox from "../TodoInfoBox/TodoInfoBox";
import { useSelector } from "react-redux";

export default function TodoControlPanel({ todoInfoBoxVisible }) {
  const selectedTodo = useSelector((state) => state.selectedTodo);

  return (
    <Container
      sx={{
        display: selectedTodo ? "block" : "none",
        flexBasis: "35%",
        py: 1,
        backgroundColor: "aliceblue",
      }}
    >
      <TodoInfoBox />
    </Container>
  );
}
