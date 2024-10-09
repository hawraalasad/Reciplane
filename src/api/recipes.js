import instance from "./index";

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
  console.log(data);
  return data;
};

const updateRecipe = async (id, recipeInfo) => {
  const { data } = await instance.put(`/recipes/${id}`, recipeInfo);
  return data;
};

const deleteRecipe = async (recipeId) => {
  const { data } = await instance.delete(`/recipes/${recipeId}`);
  return data;
};

export { getAllRecipes, createRecipe, updateRecipe, deleteRecipe, getRecipe };
