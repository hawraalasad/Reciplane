import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getRecipe, updateRecipe, toggleLike } from "../api/recipes";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMyProfile } from "../api/auth";
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

  const { data: profile, error: profileError } = useQuery({
    queryKey: ["profile"],
    queryFn: getMyProfile,
  });

  const [localLiked, setLocalLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(0);

  useEffect(() => {
    if (recipe) {
      setLocalLiked(recipe.isLiked);
      setLocalLikes(recipe.likes);
    }
  }, [recipe]);

  const updateRecipeMutation = useMutation({
    mutationFn: (updatedRecipe) => updateRecipe(recipeId, updatedRecipe),
    onSuccess: () => {
      queryClient.invalidateQueries(["recipe", recipeId]);
    },
  });

  const handleUpdateRecipe = (updatedRecipe) => {
    updateRecipeMutation.mutate(updatedRecipe);
  };

  const likeRecipeMutation = useMutation({
    mutationFn: () => toggleLike(recipeId),
    onMutate: () => {
      // Optimistically update UI
      setLocalLiked(!localLiked);
      setLocalLikes(localLiked ? localLikes - 1 : localLikes + 1);
    },
    onError: () => {
      // Revert local state if the server request fails
      setLocalLiked(!localLiked);
      setLocalLikes(localLiked ? localLikes + 1 : localLikes - 1);
    },
    onSettled: () => {
      // Refetch the recipe data to ensure we have the latest state
      queryClient.invalidateQueries(["recipe", recipeId]);
    },
  });

  const handleLikeRecipe = () => {
    likeRecipeMutation.mutate();
  };

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
          <ul className="list-disc list-outside ml-6 text-xl">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="mb-4">
                {step}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center mt-8">
          <button
            className={`flex items-center ${
              recipe.likedBy.includes(profile?._id)
                ? "text-red-500"
                : "text-gray-500"
            } hover:text-red-500 transition-colors duration-200`}
            onClick={handleLikeRecipe}
            disabled={likeRecipeMutation.isLoading}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              class={`w-6 h-6 transition-all duration-300 ease-in-out mr-1 hover:scale-110 ${
                recipe.likedBy.includes(profile?._id)
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>

            <p
              className={`${
                recipe.likedBy.length === 1 ? "text-red-500" : "text-gray-500"
              }`}
            >
              {recipe.likedBy.length}{" "}
              {recipe.likedBy.length === 1 ? "Like" : "Likes"}
            </p>
          </button>
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
