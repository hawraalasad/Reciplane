import React, { useEffect, useState } from "react";
import { getAllRecipes } from "../api/recipes"; // You'll need to create this API function

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const allRecipes = await getAllRecipes();
        setRecipes(allRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>All Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          {/* Add more recipe details here */}
        </div>
      ))}
    </div>
  );
};

export default AllRecipes;
