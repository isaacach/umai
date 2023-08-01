/* eslint-disable react/prop-types */
import { useState } from "react";

export default function SearchBar({ onSubmit, onClick }) {
  const [searchTerm, setSearchTerm] = useState("");

  const [icon, setIcon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = (e) => {
    console.log(e.target.alt);
    setIcon(e.target.alt);
    console.log(icon);
    onClick(icon);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <h2 className="title">Discover your new favorite recipes</h2>
        <input
          className="search-bar"
          onChange={handleChange}
          value={searchTerm}
          placeholder="food..."
        />
        <div className="search-icons">
          <div className="icon-wrapper">
            <img
              className="icon"
              onClick={handleClick}
              src="src/images/breakfast.png"
              alt="Breakfast"
            />
            <span className="popup">Breakfast</span>
          </div>
          <div className="icon-wrapper">
            <img
              className="icon"
              onClick={handleClick}
              src="src/images/entree.png"
              alt="Entree"
            />
            <span className="popup">Entree</span>
          </div>
          <div className="icon-wrapper">
            <img
              className="icon"
              onClick={handleClick}
              src="src/images/side.png"
              alt="Side"
            />
            <span className="popup">Side</span>
          </div>
          <div className="icon-wrapper">
            <img
              className="icon"
              onClick={handleClick}
              src="src/images/meat.png"
              alt="Meat"
            />
            <span className="popup">Meat</span>
          </div>
          <div className="icon-wrapper">
            <img
              className="icon"
              onClick={handleClick}
              src="src/images/pasta.png"
              alt="Pasta"
            />
            <span className="popup">Pasta</span>
          </div>
          <div className="icon-wrapper">
            <img
              className="icon"
              onClick={handleClick}
              src="src/images/seafood.png"
              alt="Seafood"
            />
            <span className="popup">Seafood</span>
          </div>
          <div className="icon-wrapper">
            <img
              className="icon"
              onClick={handleClick}
              src="src/images/vegetarian.png"
              alt="Vegetarian"
            />
            <span className="popup">Vegetarian</span>
          </div>
          <div className="icon-wrapper">
            <img
              className="icon"
              onClick={handleClick}
              src="src/images/vegan.png"
              alt="Vegan"
            />
            <span className="popup">Vegan</span>
          </div>
          <div className="icon-wrapper">
            <img
              className="icon"
              onClick={handleClick}
              src="src/images/dessert.png"
              alt="Dessert"
            />
            <span className="popup">Dessert</span>
          </div>
          <div className="icon-wrapper">
            <img
              className="icon"
              onClick={handleClick}
              src="src/images/miscellaneous.png"
              alt="Miscellaneous"
            />
            <span className="popup">Miscellaneous</span>
          </div>
        </div>
      </form>
    </div>
  );
}
