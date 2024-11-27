import { Task } from '../types';

let tasks: Task[] = [
  { id: '1', title: 'Sample Task 1', completed: false },
  { id: '2', title: 'Sample Task 2', completed: true },
];

export const fetchTasks = async (): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(tasks), 1000);
  });
};

export const addTask = async (newTask: Task): Promise<Task> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks.push(newTask); 
      resolve(newTask);
    }, 1000);
  });
};

export const deleteTask = async (taskId: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks = tasks.filter((task) => task.id !== taskId); 
      resolve();
    }, 1000);
  });
};
