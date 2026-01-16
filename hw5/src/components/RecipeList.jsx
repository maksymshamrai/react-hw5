import styled from "styled-components";
import RecipeCard from "./RecipeCard";
import { recipes } from  "../data/recipes";

const Grid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 40px;
`;

function RecipeList() {
  return (
    <Grid>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </Grid>
  );
}

export default RecipeList;
