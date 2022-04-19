import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const headTable = [
  'Name',
  'Rotation Period',
  'Orbital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface Water',
  'Population',
  'Films',
  'Created',
  'Edited',
  'URL',
];

function TableStartWars() {
  const { data } = useContext(AppContext);

  return (
    <table>
      <thead>
        <tr>
          {
            headTable.map((heading) => (
              <th key={ heading }>{ heading }</th>
            ))
          }
        </tr>
      </thead>

      <tbody>
        {
          data.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surfaceWater}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default TableStartWars;
