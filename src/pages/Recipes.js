import React, { useState } from "react";
import RecipeItem from "../components/RecipeItem";
import { getAllRecipes } from "../api/recipes";
import { useQuery } from "@tanstack/react-query";
import AddRecipe from "../components/AddRecipe";

const Recipes = () => {
  const {
    data: recipes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });

  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  const onOpen = () => setShow(true);

  const recipeList = recipes?.map((recipe) => (
    <RecipeItem key={recipe._id} {...recipe} />
  ));

  const handleGetAllRecipes = async () => {
    try {
      const fetchedRecipes = await getAllRecipes();
      // You might want to update the state here or trigger a re-render
      console.log("Fetched recipes:", fetchedRecipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="p-5 min-h-screen bg-gray-900">
      {/* Add recipe and Get All Recipes buttons */}
      <div className="mb-5 flex gap-3">
        <button
          onClick={onOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Add Recipe
        </button>
        <button
          onClick={handleGetAllRecipes}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Get All Recipes
        </button>
      </div>
      {/* Recipe list */}
      <div className="flex flex-wrap gap-3">{recipeList}</div>

      {/* Add recipe modal */}
      <AddRecipe show={show} onClose={onClose} onSave={() => {}} />
    </div>
  );
};

export default Recipes;
