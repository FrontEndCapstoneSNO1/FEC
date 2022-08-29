/* eslint-disable react/function-component-definition */
import React from 'react';

const Search = (props) => (
  <div id="search-bar">
    <form action="/" method="GET" className="search-bar-form">
      <input
        type="search"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
        className="search-bar-field"
      />
      <button type="submit" className="search-bar-button">
        <img src="magnify.png" alt="Search" />
      </button>
    </form>
  </div>
);

export default Search;