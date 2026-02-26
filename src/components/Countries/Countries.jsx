import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  const [countryVisited, setCountryVisited] = useState([]);

  const handleCountryVisited = (country) => {
    console.log("Hello little boy", country);

    const newCountriesVisited = [...countryVisited, country];
    setCountryVisited(newCountriesVisited);
  };
  console.log(countries);
  return (
    <div>
      <h1>Countries Visted: {countryVisited.length}</h1>
      <ol>
        {countryVisited.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleCountryVisited={handleCountryVisited}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
