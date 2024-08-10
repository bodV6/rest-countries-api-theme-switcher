const CountryCard = ({country}) => (
  <div className="country-card">
    <img src={country.flag} alt={`${country.name} flag`} />
    <h2>Nigeria</h2>
    <p>Population: 0</p>
    <p>Region: Africa</p>
    <p>Capital: Abuja</p>
  </div>
);

export default CountryCard;
