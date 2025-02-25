import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Homepage = ({ searchTerm, filter, region }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(country => {
    const matchesSearchTerm = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    const matchesFilter =
      filter === 'Independent'
        ? country.independent
        : filter === 'Dependent'
        ? !country.independent
        : true;

    return matchesSearchTerm && matchesRegion && matchesFilter;
  });

  return (
    <div>
      <h1 style={{color: "grey",textAlign:"center",fontSize:"150%"}}>Country Details</h1>
      <div className="country-cards">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <Link key={index} to={`/country/${country.name.common}`} className="country-card">
              <img
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
                className="country-flag"
              />
              <h3>{country.name.common}</h3>
              <p><strong>Country Code:</strong> {country.cca3}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Borders:</strong> {country.borders ? country.borders.join(', ') : 'No borders'}</p>
            </Link>
          ))
        ) : (
          <p>No countries found</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
