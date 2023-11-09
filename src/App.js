import "./App.css";
import Root from "../src/components/Root/Root";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleTodoInfoBoxClick } from './store/slices/TaskSlice'
import TodoInfoBox from "./components/TodoInfoBox/TodoInfoBox";
import Calendar from "./components/Calendar/Calendar";


function App() {
  
  const todoInfoBoxVisible = useSelector((state) => state.todoInfoBoxVisible)

  return (
    <div className="App">
      <Root>
        <Container sx={{display: 'flex'}} >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              py: 5,
              backgroundColor: 'beige'
            }}
          >
            <TaskList />
            <Form />
            <Calendar/>
          </Container>
          <Container sx={{ display: todoInfoBoxVisible ? 'block' : 'none', flexBasis: '35%', py: 1, backgroundColor: 'aliceblue'}}>
            <TodoInfoBox />
          </Container>
        </Container>
      </Root>
    </div>
  );
}

export default App;
