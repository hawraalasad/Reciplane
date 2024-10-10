import React, { useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getRecipesByCountry } from "../api/recipes";
import { useQuery } from "@tanstack/react-query";
import ContinentLayout from "../components/ContinentLayout";
import { motion } from "framer-motion";
import { Plus } from "react-feather";
import AddRecipe from "../components/AddRecipe";

const Japan = () => {
  const location = useLocation();
  const countryId = location.pathname.split("/")[1];
  const [isAddRecipeOpen, setIsAddRecipeOpen] = useState(false);

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

  const handleAddRecipeClick = () => {
    setIsAddRecipeOpen(true);
  };

  return (
    <ContinentLayout backgroundColor="#FFFFFF">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen p-8 font-['Noto Sans JP', sans-serif] relative"
      >
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-6xl font-bold mb-12 text-center">
            <span className="bg-[#BC002D] text-[#FFFFFF] px-6 py-3 rounded-lg shadow-lg font-['Shippori Mincho', serif] inline-block transform -rotate-3">
              Japanese Cuisine
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Link
                key={recipe._id}
                to={`/recipes/${recipe._id}`}
                className="bg-[#FFFFFF] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-[#BC002D]"
                aria-label={`View recipe for ${recipe.name}`}
              >
                <img
                  src={`http://localhost:8000/${recipe.image}`}
                  alt={recipe.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold mb-2 text-[#000000] font-['Shippori Mincho', serif] flex items-center">
                    <span className="mr-2">🍱</span>
                    {recipe.name}
                  </h2>
                  <p className="text-gray-600 mb-2 flex items-center">
                    <span className="mr-2">👨‍🍳</span>
                    By: {recipe.user.username}
                  </p>
                  <p className="text-[#000000] truncate flex items-center">
                    <span className="mr-2">📜</span>
                    {recipe.description}
                  </p>
                </div>
              </Link>
            ))}
            {/* Add Recipe Card */}
            <div
              onClick={handleAddRecipeClick}
              className="bg-[#FFFFFF] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-[#BC002D] flex items-center justify-center cursor-pointer row-span-2"
            >
              <div className="text-center">
                <Plus size={96} className="text-[#BC002D] mx-auto mb-8" />
                <p className="text-3xl font-semibold text-[#000000] font-['Shippori Mincho', serif]">
                  Add New Recipe
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <AddRecipe
        show={isAddRecipeOpen}
        onClose={() => setIsAddRecipeOpen(false)}
        username=""
        isLoggedIn={true}
      />
    </ContinentLayout>
  );
};

export default Japan;
