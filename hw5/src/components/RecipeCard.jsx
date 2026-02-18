import { Card, Image, Title, Info } from "./RecipeCard.styled";
import Difficulty from "./Difficulty";

function RecipeCard({ recipe }) {
  return (
    <Card $hard={recipe.difficulty === 3}>
      <Image src={recipe.image} alt={recipe.title} />
      <Title>{recipe.name}</Title>

      <Info>
        <span>{recipe.time} min</span>
        <span>{recipe.servings} servings</span>
        <span>{recipe.calories} cal</span>
      </Info>
      
      <Difficulty level={recipe.difficulty} />
    </Card>
  );
}

export default RecipeCard;
