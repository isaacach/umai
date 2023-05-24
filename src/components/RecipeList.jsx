/* eslint-disable react/prop-types */
import "../css/recipes.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";

export default function RecipeList({ recipes }) {
  const [open, setOpen] = useState(false);
  const [recipe, setRecipe] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleShow = (e) => {  
    const recipe = recipes.find((recipe) => recipe.idMeal === e.target.key);
    setRecipe(recipe);
    console.log(recipe);
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
    <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {recipe.strMeal}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {recipe.strInstructions}
          </Typography>
        </Box>
      </Modal>
      
    <div className="show-recipes">
      {recipes.map((recipe) => {
        return (
          <div onClick={handleShow} className="recipe" key={recipe.idMeal}>
            <h3 className="recipe-title">{recipe.strMeal}</h3>
            <img
              className="recipe-img"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
          </div>
        );
      })}
    </div>
    </>
  );
}
