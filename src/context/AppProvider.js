import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const setPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const dataFetch = await response.json();
      setData(dataFetch.results);
    };
    setPlanets();
  }, []);

  return (
    <AppContext.Provider value={ data }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default AppProvider;
