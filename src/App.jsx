import './css/App.css';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import { searchRecipes } from './api';

function App() {

  const handleSubmit = (searchTerm) => {
    searchRecipes(searchTerm);
  }

  return (
    <div className='page-wrapper'>
      <Nav/>
      <div className='contaianer main'>
      <div className='row main'>
        <div className='col main'>  
        <SearchBar onSubmit={handleSubmit}/>
        </div>
      </div>     
    </div>
    </div>
  )
}

export default App
