import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../style/countrydetailspage.css";

const CountryDetailsPage = () => {
  const { countryName } = useParams(); 
  const [country, setCountry] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);

      const selectedCountry = data.find(
        (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
      );
      setCountry(selectedCountry);
    };

    fetchCountries();
  }, [countryName]);

  if (!country) return <p>Loading Please Wait...</p>;

  return (
    <div className="country-details">
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={country.name.common} />
      <p><strong>Code:</strong> {country.cca3}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Borders:</strong></p>
      <ul>
        {country.borders?.length > 0 ? (
          country.borders.map((border) => {
            const borderCountry = countries.find((c) => c.cca3 === border);
            return (
              <li key={border}>
                <Link to={`/country/${borderCountry?.name.common}`}>
                  {borderCountry?.name.common || border}
                </Link>
              </li>
            );
          })
        ) : (
          <p>None</p>
        )}
      </ul>
    </div>
  );
};

export default CountryDetailsPage;
