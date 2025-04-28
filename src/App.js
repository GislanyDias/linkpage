// src/App.js
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Card from './components/Card/Card';
import sites from './data/sites';
import './App.css';

function App() {
  const [filter, setFilter] = useState('todos');

  const categories = ['todos', ...new Set(sites.map(site => site.categoria))];

  const filteredSites = filter === 'todos'
    ? sites
    : sites.filter(site => site.categoria === filter);

  return (
    <div className="container">
      <Header />
      <Filter 
        categories={categories}
        currentFilter={filter}
        onFilterChange={setFilter}
      />
      <main className="content">
        {filteredSites.map((site, index) => (
          <Card key={index} nome={site.nome} url={site.url} />
        ))}
      </main>
    </div>
  );
}

export default App;
