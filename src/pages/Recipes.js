import React, { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllRecipes } from "../api/recipes";
import { MapPin, Compass, Coffee, Globe, Plus } from "react-feather";
import AddRecipe from "../components/AddRecipe";
import UserContext from "../context/UserContext";

const Recipes = () => {
  const [isAddRecipeOpen, setIsAddRecipeOpen] = useState(false);
  const [user] = useContext(UserContext);

  const {
    data: recipes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });

  console.log("Recipes data:", recipes);

  const handleAddRecipeClick = () => {
    console.log("Add Recipe button clicked");
    setIsAddRecipeOpen(true);
  };

  if (isLoading)
    return (
      <div className="text-center text-gray-800 text-2xl animate-pulse">
        Cooking up some recipes...
      </div>
    );
  if (isError)
    return (
      <div className="text-center text-red-600 text-2xl">
        Oops! Our chef dropped the cookbook!
      </div>
    );

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-5xl text-blue-600 font-bold mb-8 text-center flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
        <Globe className="mr-4 text-yellow-500 animate-spin-slow" /> Tasty World
        Tour
      </h1>
      {user && (
        <div className="mb-8 flex justify-end">
          <button
            onClick={handleAddRecipeClick}
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 flex items-center"
          >
            <Plus className="mr-2" /> Add New Recipe
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500"
          >
            <h2 className="text-2xl text-gray-800 font-bold mb-4 flex items-center">
              <Coffee className="mr-2 text-blue-500" /> {recipe.title}
            </h2>
            <p className="text-gray-600 mb-4 flex items-center">
              <MapPin className="mr-2 text-green-500" /> Origin:{" "}
              {recipe.country.name}
            </p>
            <div className="mb-4">
              <h3 className="text-lg text-gray-800 font-semibold mb-2 flex items-center">
                <Compass className="mr-2 text-yellow-500" /> Ingredients:
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="mb-1 hover:text-blue-500 transition-colors duration-200"
                  >
                    {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 font-bold shadow-md">
              Let's Cook!
            </button>
          </div>
        ))}
      </div>
      <AddRecipe
        show={isAddRecipeOpen}
        onClose={() => setIsAddRecipeOpen(false)}
        username={user ? user.username : ""}
        isLoggedIn={!!user}
      />
    </div>
  );
};

export default Recipes;
