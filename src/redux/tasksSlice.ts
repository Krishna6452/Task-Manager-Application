import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, Filter } from '../types';

interface TasksState {
  tasks: Task[];
  filter: Filter;
  loading: boolean;
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  filter: 'all',
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    toggleTask(state, action: PayloadAction<string>) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTaskAsync(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setFilter(state, action: PayloadAction<Filter>) {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, deleteTaskAsync, setFilter } = tasksSlice.actions;

export default tasksSlice.reducer;
