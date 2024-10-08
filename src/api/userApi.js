import instance from "./index";

export const fetchUserProfile = async () => {
  try {
    const response = await instance.get("/user/profile");
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const fetchUserRecipes = async () => {
  try {
    const response = await instance.get("/user/recipes");
    return response.data;
  } catch (error) {
    console.error("Error fetching user recipes:", error);
    throw error;
  }
};

export const fetchLikedRecipes = async () => {
  try {
    const response = await instance.get("/user/liked-recipes");
    return response.data;
  } catch (error) {
    console.error("Error fetching liked recipes:", error);
    throw error;
  }
};
