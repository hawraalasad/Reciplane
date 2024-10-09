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
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <img
            src={`http://localhost:8000/${recipe.image}`}
            alt={recipe.name}
            className="w-full md:w-1/2 h-64 object-cover"
          />
          <div className="p-6 text-left md:w-1/2 flex items-center">
            <h1 className="text-3xl font-bold">{recipe.name}</h1>
          </div>
        </div>
        <div className="p-10 text-left">
          <div className="flex items-center mb-4">
            <p className="text-gray-600 text-xl mr-2">By:</p>
            <img
              src={`http://localhost:8000/${recipe.user.image}`}
              alt={recipe.user.username}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <p className="text-gray-600 text-xl">{recipe.user.username}</p>
          </div>
          <p className="text-gray-600 mb-8 text-xl">
            Country: {recipe.country.name}
          </p>

          <h2 className="text-4xl font-semibold mb-6">Ingredients:</h2>
          <ul className="list-disc list-inside mb-8 text-xl">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient.name}</li>
            ))}
          </ul>

          <h2 className="text-4xl font-semibold mb-6">Instructions:</h2>
          <p className="mb-8 text-xl">{recipe.description}</p>
          <ol className="list-decimal list-outside ml-6 text-xl">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="mb-6">
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
