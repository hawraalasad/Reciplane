import instance from "./index";
import { getToken } from "./storage";

const getAllRecipes = async () => {
  try {
    const response = await instance.get("/recipes");
    return response.data;
  } catch (error) {
    console.error("Error fetching all recipes:", error);
    throw error;
  }
};

const getRecipe = async (recipeId) => {
  try {
    const response = await instance.get(`/recipes/${recipeId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
};

const createRecipe = async (newRecipe) => {
  //form data
  const formData = new FormData();
  for (const key in newRecipe) {
    formData.append(key, newRecipe[key]);
  }
  const { data } = await instance.post("/recipes", formData);
  return data;
};

const updateRecipe = async (recipeInfo) => {
  const { data } = await instance.put(
    `/api/recipes/${recipeInfo._id}`,
    recipeInfo
  );
  return data;
};

const deleteRecipe = async (recipeId) => {
  const { data } = await instance.delete(`/recipes/${recipeId}`);
  return data;
};

// Add these new functions
const likeRecipe = async (recipeId) => {
  try {
    const response = await instance.post(`/recipes/${recipeId}/like`);
    return response.data;
  } catch (error) {
    console.error("Error liking recipe:", error);
    throw error;
  }
};

const rateRecipe = async (recipeId, rating) => {
  try {
    const response = await instance.post(`/recipes/${recipeId}/rate`, {
      rating,
    });
    return response.data;
  } catch (error) {
    console.error("Error rating recipe:", error);
    throw error;
  }
};

// Don't forget to export these new functions
export {
  getAllRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipe,
  likeRecipe,
  rateRecipe,
};
