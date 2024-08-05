import React, { useState } from 'react';

function Search() {
  const items = ['Mustang GT', 'Range Rover Vogue', 'Lexus', 'Ford Endevour', 'Maybach'];
  const [query, setQuery] = useState('');

  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Search results for: ${query}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search items..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
