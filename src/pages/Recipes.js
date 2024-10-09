import React, { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllRecipes } from "../api/recipes";
import {
  MapPin,
  Compass,
  Coffee,
  Globe,
  Plus,
  Filter,
  Search,
  ChevronDown,
} from "react-feather";
import AddRecipe from "../components/AddRecipe";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const [isAddRecipeOpen, setIsAddRecipeOpen] = useState(false);
  const [user] = useContext(UserContext);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("All");

  const {
    data: recipes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getAllRecipes,
  });

  console.log(recipes);
  const handleAddRecipeClick = () => {
    setIsAddRecipeOpen(true);
  };

  const navigate = useNavigate();

  const handleRecipeClick = (recipeId) => {
    console.log(recipeId);
    navigate(`/recipes/${recipeId}`);
  };

  const countries = [
    "All",
    ...new Set(recipes?.map((recipe) => recipe.country.name) || []),
  ];

  const ingredients = [
    "All",
    ...new Set(
      recipes?.flatMap((recipe) => recipe.ingredients.map((ing) => ing.name)) ||
        []
    ),
  ];

  const filteredRecipes = recipes
    ?.filter(
      (recipe) =>
        selectedCountry === "All" || recipe.country.name === selectedCountry
    )
    .filter(
      (recipe) =>
        selectedIngredient === "All" ||
        recipe.ingredients.some((ing) => ing.name === selectedIngredient)
    )
    .filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="bg-gradient-to-b from-[#37B0E6] to-[#84B850] min-h-screen p-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-green-300 rotate-45 animate-spin"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-400 rounded-tl-3xl rounded-br-3xl animate-wiggle"></div>

      <h1 className="text-5xl text-white font-bold mb-8 text-center flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
        <Globe className="mr-4 text-yellow-300 animate-spin-slow" /> Tasty World
        Tour
      </h1>

      <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center space-x-4 flex-wrap gap-4">
          <div className="flex items-center">
            <Filter className="mr-2 text-white" />
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="bg-white text-[#37B0E6] px-4 py-2 rounded-full hover:bg-yellow-300 hover:text-white transition-colors duration-300 font-bold shadow-lg"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <ChevronDown className="mr-2 text-white" />
            <select
              value={selectedIngredient}
              onChange={(e) => setSelectedIngredient(e.target.value)}
              className="bg-white text-[#37B0E6] px-4 py-2 rounded-full hover:bg-yellow-300 hover:text-white transition-colors duration-300 font-bold shadow-lg"
            >
              {ingredients.map((ingredient) => (
                <option key={ingredient} value={ingredient}>
                  {ingredient}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg">
            <Search className="text-[#37B0E6] mr-2" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent focus:outline-none text-[#37B0E6]"
            />
          </div>
        </div>
        {user && (
          <button
            onClick={handleAddRecipeClick}
            className="bg-white text-[#37B0E6] px-6 py-3 rounded-full hover:bg-yellow-300 hover:text-white transition-colors duration-300 flex items-center font-bold shadow-lg transform hover:scale-105"
          >
            <Plus className="mr-2" /> Add New Recipe
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRecipes?.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500 cursor-pointer flex flex-col"
            onClick={() => handleRecipeClick(recipe._id)}
          >
            <h2 className="text-2xl text-gray-800 font-bold mb-4 flex items-center">
              <Coffee className="mr-2 text-blue-500" />
              {recipe.name.charAt(0).toUpperCase() + recipe.name.slice(1)}
            </h2>
            <img
              src={
                recipe.image
                  ? `http://localhost:8000/${recipe.image}`
                  : "https://cdn-icons-png.freepik.com/512/8344/8344718.png"
              }
              alt={recipe.name}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
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
