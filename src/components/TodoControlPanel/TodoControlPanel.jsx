import { Container } from "@mui/material";
import React from "react";
import TodoInfoBox from "../TodoInfoBox/TodoInfoBox";

export default function TodoControlPanel({ todoInfoBoxVisible }) {
  return (
    <Container
      sx={{
        display: todoInfoBoxVisible ? "block" : "none",
        flexBasis: "35%",
        py: 1,
        backgroundColor: "aliceblue",
      }}
    >
      <TodoInfoBox />
    </Container>
  );
}
