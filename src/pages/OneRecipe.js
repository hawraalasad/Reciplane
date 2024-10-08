import React from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../api/recipes";
import { useQuery } from "@tanstack/react-query";

const OneRecipe = () => {
  const { recipeId } = useParams();

  const {
    data: recipe,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => getRecipe(recipeId),
    onError: (error) => {
      console.error("Error fetching recipe:", error);
    },
  });

  console.log(recipe);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        Error: {error.message || "An error occurred while fetching the recipe."}
      </div>
    );
  }

  if (!recipe) {
    return <div>No recipe data available.</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>ingredients:</p>
      <ul>
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient.name}</li>
        ))}
      </ul>
      <p>instructions: {recipe.description}</p>
      <ol>
        {recipe.instructions?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default OneRecipe;
