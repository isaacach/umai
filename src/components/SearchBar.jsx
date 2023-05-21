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
        <div>
            <form onSubmit={handleSubmit}>
              <input onChange={handleChange} value={searchTerm} />
            </form>
        </div>
    )
}