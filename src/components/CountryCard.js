import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.name.common}`} className="country-card">
      <img src={country.flags.png} alt={country.name.common} />
      <h2>{country.name.common}</h2>
      <p>Code: {country.cca3}</p>
      <p>Region: {country.region}</p>
      <p>Borders: {country.borders?.join(', ') || 'None'}</p>
    </Link>
  );
};

export default CountryCard;