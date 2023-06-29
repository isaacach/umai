/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault();
    onSubmit(searchTerm); 
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleClick = (e) => {
    setIcon(e.target.alt);
    console.log(icon);
  }

    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
              <h2 className='title'>Discover your new favorite recipes</h2>
              <input className='search-bar' onChange={handleChange} value={searchTerm} placeholder='Food...'/>
              <div className='search-icons'>
                <div className='icon-wrapper'>
                  <img className='icon' onClick={handleClick} src='src/images/breakfast.png' alt='breakfast'/>
                  <span className='popup'>Breakfast</span>
                </div>
                <img className='icon' onClick={handleClick} src='src/images/entree.png' alt='entree'/>
                <img className='icon' onClick={handleClick} src='src/images/side.png' alt='side'/>
                <img className='icon' onClick={handleClick} src='src/images/meat.png' alt='meat'/>
                <img className='icon' onClick={handleClick} src='src/images/pasta.png' alt='pasta'/>
                <img className='icon' onClick={handleClick} src='src/images/seafood.png' alt='seafood'/>
                <img className='icon' onClick={handleClick} src='src/images/vegetarian.png' alt='vegetarian'/>
                <img className='icon' onClick={handleClick} src='src/images/vegan.png' alt='vegan'/>
                <img className='icon' onClick={handleClick} src='src/images/dessert.png' alt='dessert'/>
                <img className='icon' onClick={handleClick} src='src/images/miscellaneous.png' alt='miscellaneous'/>
              </div>
            </form>
        </div>
    )
}