import { Container } from "@mui/material";
import React from "react";
import TaskList from "../TaskList/TaskList";
import CreateTodoForm from "../CreateTodoForm/CreateTodoForm";

export default function TodoDashBoard() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        py: 5,
        backgroundColor: "beige",
      }}
    >
      <TaskList />
      <CreateTodoForm />
    </Container>
  );
}
