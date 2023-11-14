import "./App.css";
import Root from "../src/components/Root/Root";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import TodoDashBoard from "./components/TodoDashboard/TodoDashBoard";
import TodoControlPanel from "./components/TodoControlPanel/TodoControlPanel";

function App() {
  const todoInfoBoxVisible = useSelector((state) => state.todoInfoBoxVisible);

  return (
    <div className="App">
      <Root>
        <Container sx={{ display: "flex" }}>
          <TodoDashBoard />
          <TodoControlPanel todoInfoBoxVisible={todoInfoBoxVisible} />
        </Container>
      </Root>
    </div>
  );
}

export default App;
