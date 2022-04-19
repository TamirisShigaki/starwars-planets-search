import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const setPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const dataFetch = await response.json();
      setData(dataFetch.results);
      setFilters(dataFetch.results);
    };
    setPlanets();
  }, []);

  const filterPlanet = (value) => {
    const newData = filters.filter(({ name }) => name.includes(value));
    setData(newData);
  };

  return (
    <AppContext.Provider value={ { data, setData, filterPlanet } }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default AppProvider;
