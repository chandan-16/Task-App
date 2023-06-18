import { useState } from 'react';
import AddTask from './AddTask/AddTask';
import './App.css';
import Header from './Header/Header.jsx';
import TaskList from './TaskList/TaskList';

function App() {

  const [tasks,setTasks] = useState([]);

  return (
    <div className="App">
      <Header/>
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
