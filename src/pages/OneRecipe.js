import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe, likeRecipe, rateRecipe } from "../api/recipes";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart, Star } from "react-feather";

const OneRecipe = () => {
  const { recipeId } = useParams();
  const [userRating, setUserRating] = useState(0);
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

  const likeMutation = useMutation({
    mutationFn: likeRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries(["recipe", recipeId]);
    },
  });

  const rateMutation = useMutation({
    mutationFn: ({ recipeId, rating }) => rateRecipe(recipeId, rating),
    onSuccess: () => {
      queryClient.invalidateQueries(["recipe", recipeId]);
    },
  });

  const handleLike = () => {
    likeMutation.mutate(recipeId);
  };

  const handleRate = (rating) => {
    setUserRating(rating);
    rateMutation.mutate({ recipeId, rating });
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
    </div>
  );
};

export default OneRecipe;
