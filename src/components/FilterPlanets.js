import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function FilterPlanets() {
  const { filterPlanet, data, setData } = useContext(AppContext);
  const [namePlanet, setNamePlanet] = useState('');
  const [optionsColumn, setOptionColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const nameChange = ({ target: { value } }) => {
    setNamePlanet(value);
    filterPlanet(value);
  };

  const handleInput = ({ target: { name, value } }) => {
    setFilterByNumericValues({ ...filterByNumericValues, [name]: value });
  };

  const handleClick = () => {
    const { column, comparison, value } = filterByNumericValues;
    switch (comparison) {
    case 'maior que':
      return setData(data.filter((planet) => +planet[column] > +value));
    case 'menor que':
      return setData(data.filter((planet) => +planet[column] < +value));
    case 'igual a':
      return setData(data.filter((planet) => +planet[column] === +value));
    default:
      return data;
    }
  };

  return (
    <form>
      <input
        data-testid="name-filter"
        value={ namePlanet }
        onChange={ nameChange }
      />

      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleInput }
      >
        {
          optionsColumn.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              { option }
            </option>
          ))
        }
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleInput }
      >
        <option
          value="maior que"
        >
          maior que
        </option>
        <option
          value="menor que"
        >
          menor que
        </option>
        <option
          value="igual a"
        >
          igual a
        </option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ filterByNumericValues.value }
        onChange={ handleInput }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filter
      </button>
    </form>
  );
}

export default FilterPlanets;
