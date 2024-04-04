import React from 'react';
import SearchBar from './Searchbar.jsx';
import '../styles/navbar.css';

function Navbar({ onSearch }) {
  return (
    <nav>
      <h1>MeteoPortal</h1>
      <div className="search-container">
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Navbar;