import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList'; 
import FilterButtons from './components/FilterButtons'; 
import './App.css'; 
const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};


export default App;
