import { useState } from "react";
import SearchBar from "./body/SearchBar";

import CardGrid from "./body/CardGrid";
import FilterDropdown from "./body/FilterDropdown";

const Page = () => {
  const [searchterm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  console.log(searchterm)

  return (
    <>
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        <FilterDropdown />
      </div>
      {/* <CountryCard /> */}
      <CardGrid />
    </>
  );
};

export default Page;
