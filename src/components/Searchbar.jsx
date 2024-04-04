import React, { useState } from 'react';
import '../../src/styles/searchbar.css';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Buscar ciudad"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;