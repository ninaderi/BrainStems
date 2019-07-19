import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="filterbox">
      <div className="filtertitles">
        <b>SEARCH BY KEYWORD</b>
      </div>
      <input
        className="search"
        type="search"
        placeholder="Search Here for New Activity"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
