import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { v4 as uuidv4 } from 'uuid'; 

const TaskInput: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      const newTask = {
        id: uuidv4(),  
        title: taskTitle,
        completed: false,
      };
      
      dispatch(addTask(newTask));
      setTaskTitle(''); 
    }
  };

  return (
    <div className="task-input">
      <input 
        type="text" 
        value={taskTitle} 
        onChange={(e) => setTaskTitle(e.target.value)} 
        placeholder="Enter task title"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
