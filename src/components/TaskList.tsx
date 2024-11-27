import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { toggleTask, deleteTaskAsync } from '../redux/tasksSlice';
import { Task } from '../types';
import FilterButtons from './FilterButtons';

const TaskList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, filter, loading, error } = useSelector((state: RootState) => state.tasks);

  const filteredTasks = filter === 'all'
    ? tasks
    : tasks.filter((task) => (filter === 'completed' ? task.completed : !task.completed));

  const handleToggleTask = (id: string) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTaskAsync(id));
  };

  return (
    <div className="task-list">
      <FilterButtons /> 
      
      {loading && <p>Loading tasks...</p>}
      {error && <p>Error loading tasks: {error}</p>}

      <ul>
        {filteredTasks.map((task: Task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : 'pending'}`}>
            <span className="task-title">{task.title}</span>
            <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
            <button className="toggle-btn" onClick={() => handleToggleTask(task.id)}>
              {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
