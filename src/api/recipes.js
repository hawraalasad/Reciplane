import instance from ".";

const getAllRecipes = async () => {
  const { data } = await instance.get("/api/recipes");
  return data;
};

const getRecipe = async (recipeId) => {
  const { data } = await instance.get(`/api/recipes/${recipeId}`);
  return data;
};

<<<<<<< HEAD
const createRecipe = async (newRecipe) => {
  //form data
  const formData = new FormData();
  for (const key in newRecipe) {
    formData.append(key, newRecipe[key]);
  }
  const { data } = await instance.post("/recipes", formData);
=======
const createRecipe = async (recipeInfo) => {
  const { data } = await instance.post("/api/recipes", recipeInfo);
>>>>>>> origin/main
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
  const { data } = await instance.delete(`/api/recipes/${recipeId}`);
  return data;
};

export { getAllRecipes, createRecipe, updateRecipe, deleteRecipe, getRecipe };

export const addRecipe = async (recipeData) => {
  const response = await fetch("/api/recipes", {
    method: "POST",
    body: recipeData, // This is now a FormData object
  });
  if (!response.ok) {
    throw new Error("Failed to add recipe");
  }
  return response.json();
};
