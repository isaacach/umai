import { useState } from 'react';
import './css/resets.css'
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
            <SearchBar onSubmit={handleSubmit} />
            <RecipeList recipes={recipes} />
          </div>
        </div>
      </div>
    </div>
  );
}
