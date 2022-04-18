import React, { useContext } from 'react';
import AppContext from './context/AppContext';

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
          data.map(({
            name, rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod, diameter, climate, gravity,
            terrain, surface_water: surfaceWater, population, films, created, edited, url,
          }) => (
            <tr key={ name }>
              <td>{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default TableStartWars;
