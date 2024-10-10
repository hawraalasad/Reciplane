import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../api/recipes";
import ContinentLayout from "../components/ContinentLayout";

const Recipe = () => {
  const { recipeId } = useParams();
  const {
    data: recipe,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => getRecipe(recipeId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!recipe) return <div>Not found!</div>;

  const { title, description, ingredients, user, country, instructions } =
    recipe;

  return (
    <ContinentLayout backgroundColor="bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500 mb-4">By: {user.username}</p>
        <div className="mb-4">
          <h4 className="text-xl font-medium mb-2">Ingredients:</h4>
          <ul className="list-disc list-inside">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-medium mb-2">Instructions:</h4>
          <ol className="list-decimal list-inside">
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-medium mb-2">Country:</h4>
          <p>{country.name}</p>
        </div>
      </div>
    </ContinentLayout>
  );
};

export default Recipe;
