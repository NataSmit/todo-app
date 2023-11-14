import "./App.css";
import Root from "../src/components/Root/Root";
import Container from "@mui/material/Container";
import TodoDashBoard from "./components/TodoDashboard/TodoDashBoard";
import TodoControlPanel from "./components/TodoControlPanel/TodoControlPanel";

function App() {

  return (
    <div className="App">
      <Root>
        <Container sx={{ display: "flex" }}>
          <TodoDashBoard />
          <TodoControlPanel />
        </Container>
      </Root>
    </div>
  );
}

export default App;
