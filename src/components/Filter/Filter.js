import React from 'react';
import './Filter.css';

const Filter = ({ categories, currentFilter, onFilterChange }) => {
  return (
    <div className="filter-container">
      <label htmlFor="site-filter">Filtrar por tipo:</label>
      <select
        id="site-filter"
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category === 'todos' ? 'Todos' : category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

