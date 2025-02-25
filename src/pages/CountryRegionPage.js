import React from 'react';
import { Link } from 'react-router-dom';

const CountryRegionPage = () => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <div className="country-region">
      <h1>Regions</h1>
      <ul>
        {regions.map((region) => (
          <li key={region}>
            <Link to={`/region/${region}`}>{region}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryRegionPage;