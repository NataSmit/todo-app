import './App.css';
import Root from '../src/components/Root/Root'
import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <div className="App">
      <Root>
        <TaskList/>
        <Form />
      </Root>

      
    </div>
  );
}

export default App;
