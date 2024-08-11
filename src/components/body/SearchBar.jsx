// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch }) => {
  console.log(onSearch);
  return (
    <div className="search-bar">
      {/* <FontAwesomeIcon icon={faSearch} /> */}

      <input
        type="text"
        name=""
        id=""
        placeholder="Search for a country"
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  // onSearch: PropTypes.string.isRequired,
};
