import CountryCard from "./CountryCard";
import { useState, useEffect } from "react";

const CardGrid = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("/api/data.json")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(countries[0]);
  return (
    <div className="card-container">
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </div>
  );
};

export default CardGrid;
