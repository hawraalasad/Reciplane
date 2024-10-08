import instance from ".";

const getAllRecipes = async () => {
  const { data } = await instance.get("/recipes");
  return data;
};

const getRecipe = async (recipeId) => {
  const { data } = await instance.get(`/recipes/${recipeId}`);
  return data;
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

export { getAllRecipes, createRecipe, updateRecipe, deleteRecipe, getRecipe };
