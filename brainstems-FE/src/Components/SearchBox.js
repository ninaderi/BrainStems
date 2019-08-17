import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="filterbox">
      <div className="filtertitles">
        <b>SEARCH BY KEYWORD</b>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search Here for New Activity"
        onChange={searchChange}
        id="searchBox"
      />
    </div>
  );
};

export default SearchBox;
