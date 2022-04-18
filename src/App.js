import React from 'react';
import './App.css';
import AppProvider from './context/AppProvider';
import TableStartWars from './TableStarWars';

function App() {
  return (
    <AppProvider>
      <TableStartWars />
    </AppProvider>
  );
}

export default App;
