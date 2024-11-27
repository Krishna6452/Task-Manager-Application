import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/tasksSlice';

const FilterButtons: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filter: 'all' | 'completed' | 'pending') => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <button onClick={() => handleFilterChange('all')}>All</button>
      <button onClick={() => handleFilterChange('completed')}>Completed</button>
      <button onClick={() => handleFilterChange('pending')}>Pending</button>
    </div>
  );
};

export default FilterButtons;
