import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Favorites from "./components/Favorites.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import RecipePage from "./components/RecipePage.jsx";

export default function App() {
  const [recipe, setRecipe] = useState({});

 
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="recipe-page/:id" element={<RecipePage recipe={recipe} />} />
      </Routes>
    </BrowserRouter>
  );
}
