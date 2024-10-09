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
  });

  console.log(recipe);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!recipe) return <div>No recipe data available.</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={`http://localhost:8000/${recipe.image}`}
          alt={recipe.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
          <p className="text-gray-600 mb-4">By: {recipe.user.username}</p>
          <p className="text-gray-600 mb-4">Country: {recipe.country.name}</p>

          <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient.name}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-2">Instructions:</h2>
          <p className="mb-4">{recipe.description}</p>
          <ol className="list-decimal list-inside">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default OneRecipe;
