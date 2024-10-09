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
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* ... existing code ... */}

        <div className="p-6 text-left">
          {/* ... existing code ... */}

          <div className="flex items-center mb-4">
            <button
              onClick={handleLike}
              className={`flex items-center mr-4 ${
                recipe.isLiked ? "text-red-500" : "text-gray-500"
              }`}
            >
              <Heart className="mr-2" />
              {recipe.likes} Likes
            </button>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`cursor-pointer ${
                    star <= userRating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => handleRate(star)}
                />
              ))}
              <span className="ml-2">({recipe.averageRating.toFixed(1)})</span>
            </div>
          </div>

          {/* ... rest of the existing code ... */}
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
