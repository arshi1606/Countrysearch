import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountryCard from '../components/CountryCard';
import { fetchAllCountries } from '../services/api';

const SelectedRegionPage = () => {
  const { regionName } = useParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchAllCountries()
      .then((data) => {
        const filtered = data.filter((country) => country.region === regionName);
        setCountries(filtered);
      })
      .catch(console.error);
  }, [regionName]);

  return (
    <div className="selected-region">
      <h1>Countries in {regionName}</h1>
      <div className="country-cards">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default SelectedRegionPage;