const CountryCard = ({ country }) => {
  console.log(country);

  return (
    <div className="country-card">
      <img src={country.flag} alt={`Nigerian flag`} />
      <h2>{country.name}</h2>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
};
export default CountryCard;

CountryCard.propTypes = {
  // country: PropTypes.string.isRequired,
};
