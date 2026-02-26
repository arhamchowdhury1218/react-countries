import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleCountryVisited }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    if (visited) {
      setVisited(false);
    } else {
      setVisited(true);
    }
    handleCountryVisited(country);
  };
  console.log(country);
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Name: {country.name.common}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;
