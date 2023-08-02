/* eslint-disable react/prop-types */
import "../css/recipes.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function RecipeList({ recipes }) {
  const [open, setOpen] = useState(false);
  const [recipe, setRecipe] = useState({});

  const handleClose = () => setOpen(false);

  const handleShow = (e) => {
    if (recipes[0].meals) {
      setOpen(true);
      const recipe = recipes.find(
        (recipe) => recipe.meals[0].idMeal == e.target.id
      );
      setRecipe(recipe.meals[0]);
    } 
    if (recipes[0].idMeal){
      setOpen(true);
      const recipe = recipes.find((recipe) => recipe.idMeal == e.target.id);
      setRecipe(recipe);
    }
  };

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
      <Modal open={open} onClose={handleClose}>
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
        <Fade cascade duration={200} triggerOnce>
          {recipes.map((recipe) => {
            return (
              <div
                className="recipe"
                key={recipe.idMeal ? recipe.idMeal : recipe.meals.idMeal}
              >
                <h3 className="recipe-title">
                  {recipe.strMeal ? recipe.strMeal : recipe.meals[0].strMeal}
                </h3>
                <img
                  id={recipe.idMeal ? recipe.idMeal : recipe.meals[0].idMeal}
                  className="recipe-img"
                  src={
                    recipe.strMealThumb
                      ? recipe.strMealThumb
                      : recipe.meals[0].strMealThumb
                  }
                  alt={
                    recipe.strMeal ? recipe.strMeal : recipe.meals[0].strMeal
                  }
                />
                <div className="summary-wrapper">
                  <img
                    src="src/images/magnifying-glass.png"
                    className="summary"
                    onClick={handleShow}
                    id={recipe.idMeal ? recipe.idMeal : recipe.meals[0].idMeal}
                    alt="magnifying glass"
                  />
                  <div className="hoverinfo">Quick Look</div>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
    </>
  );
}
