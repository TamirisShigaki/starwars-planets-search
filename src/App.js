import React from 'react';
import './App.css';
import FilterPlanets from './components/FilterPlanets';
import TableStartWars from './components/TableStarWars';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <FilterPlanets />
      <TableStartWars />
    </AppProvider>
  );
}

export default App;
