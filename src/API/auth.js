import instance from "./index";

const getAllRecipes = async () => {
  const response = await instance.get("/api/recipes");
  return response.data;
};

export { getAllRecipes };
