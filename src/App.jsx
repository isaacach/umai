import { useState } from 'react';
import './css/App.css';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import { searchRecipes } from './api';
import RecipeList from './components/RecipeList';

export default function App() {

  const [recipes, setRecipes] = useState([]);

  const handleSubmit = async (searchTerm) => {
    const result = await searchRecipes(searchTerm);
    console.log(result);
    setRecipes(result);
  }

  return (
    <div className="page-wrapper">
      <Nav />
      <div className="container main">
        <div className="row main">
          <div className="col main">
            {/* <img
              className="chopsticks1"
              src="src/images/chopsticks.png"
              alt="chopsticks"
            />
            <img
              className="chopsticks2"
              src="src/images/chopsticks2.png"
              alt="chopsticks"
            /> */}
            <SearchBar onSubmit={handleSubmit} />
            <RecipeList recipes={recipes} />
          </div>
        </div>
      </div>
    </div>
  );
}
