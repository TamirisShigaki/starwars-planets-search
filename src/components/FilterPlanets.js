import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function FilterPlanets() {
  const { filterPlanet } = useContext(AppContext);
  const [name, setName] = useState('');

  const nameChange = ({ target: { value } }) => {
    setName(value);
    filterPlanet(value);
  };

  return (
    <form>
      <input
        data-testid="name-filter"
        value={ name }
        onChange={ nameChange }
      />
    </form>
  );
}

export default FilterPlanets;
