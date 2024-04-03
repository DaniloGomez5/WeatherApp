import React from 'react';
import SearchBar from './Searchbar.jsx';

function Navbar({ onSearch }) {
  return (
    <nav>
      <h1>WeatherApp</h1>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Navbar;