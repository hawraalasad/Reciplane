import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllRecipes } from "../api/recipes";
import { Link } from "react-router-dom";
import ContinentLayout from "../components/ContinentLayout";
import { motion } from "framer-motion";

const AllRecipes = () => {
  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ContinentLayout backgroundColor="bg-gradient-to-b from-[#37B0E6] to-[#84B850]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen p-8"
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          All Recipes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Link
              to={`/recipes/${recipe._id}`}
              key={recipe._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <img
                src={`http://localhost:8000/${recipe.image}`}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
                <p className="text-gray-600 mb-2">
                  Country: {recipe.country.name}
                </p>
                <p className="text-gray-600">By: {recipe.user.username}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </ContinentLayout>
  );
};

export default AllRecipes;
