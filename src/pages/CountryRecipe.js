import React from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipesByCountry } from "../api/recipes";
import { useQuery } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

const CountryRecipes = () => {
  const { countryId } = useParams();

  const {
    data: recipes,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["recipes", countryId],
    queryFn: () => getRecipesByCountry(countryId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!recipes || recipes.length === 0)
    return <div>No recipes available for this country.</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Recipes from {recipes[0].country.name}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link
              to={`/recipe/${recipe.id}`}
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              aria-label={`View recipe for ${recipe.name}`}
            >
              <img
                src={`http://localhost:8000/${recipe.image}`}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
                <p className="text-gray-600 mb-2">By: {recipe.user.username}</p>
                <p className="text-gray-500 truncate">{recipe.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add an error boundary
const CountryRecipesWithErrorBoundary = () => {
  return (
    <ErrorBoundary
      fallback={<div>Something went wrong. Please try again later.</div>}
    >
      <CountryRecipes />
    </ErrorBoundary>
  );
};

export default CountryRecipesWithErrorBoundary;
