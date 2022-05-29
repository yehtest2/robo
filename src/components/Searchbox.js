import React from "react";
const SearchBox = ({ searchfiel, searchChange }) => {
  return (
    <div className="pa2 ">
      <input type="search" placeholder="search" onChange={searchChange} />
    </div>
  );
};
export default SearchBox;
