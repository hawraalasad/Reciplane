import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe, updateRecipe } from "../api/recipes";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const EditRecipeModal = ({ isOpen, onClose, recipe, onUpdate }) => {
  const [editedRecipe, setEditedRecipe] = useState(recipe);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedRecipe);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Recipe</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={editedRecipe.name || ""}
            onChange={handleChange}
            placeholder="Recipe Name"
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            name="description"
            value={editedRecipe.description || ""}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            name="instructions"
            value={
              Array.isArray(editedRecipe.instructions)
                ? editedRecipe.instructions.join("\n")
                : ""
            }
            onChange={(e) =>
              setEditedRecipe((prev) => ({
                ...prev,
                instructions: e.target.value.split("\n"),
              }))
            }
            placeholder="Instructions (one per line)"
            className="w-full p-2 mb-4 border rounded"
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const OneRecipe = () => {
  const { recipeId } = useParams();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    data: recipe,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => getRecipe(recipeId),
  });

  const updateRecipeMutation = useMutation({
    mutationFn: (updatedRecipe) => updateRecipe(recipeId, updatedRecipe),
    onSuccess: () => {
      queryClient.invalidateQueries(["recipe", recipeId]);
    },
  });

  const handleUpdateRecipe = (updatedRecipe) => {
    updateRecipeMutation.mutate(updatedRecipe);
  };

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
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={() => setIsEditModalOpen(true)}
      >
        Edit Recipe
      </button>
      <EditRecipeModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        recipe={recipe}
        onUpdate={handleUpdateRecipe}
      />
    </div>
  );
};

export default OneRecipe;
