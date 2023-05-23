/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault();
    onSubmit(searchTerm); 
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
              <h2>Search your favorite recipes</h2>
              <input className='search-bar' onChange={handleChange} value={searchTerm} placeholder='Food...'/>
            </form>
        </div>
    )
}