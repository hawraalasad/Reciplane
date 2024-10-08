import React from "react";
import { useQuery } from "@tanstack/react-query";

// Assume these functions are defined elsewhere and make actual API calls
import {
  fetchUserProfile,
  fetchUserRecipes,
  fetchLikedRecipes,
} from "../api/userApi";

const Profile = () => {
  const {
    data: userProfile,
    isLoading: isLoadingProfile,
    error: profileError,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });

  const {
    data: userRecipes,
    isLoading: isLoadingRecipes,
    error: recipesError,
  } = useQuery({
    queryKey: ["userRecipes"],
    queryFn: fetchUserRecipes,
  });

  const {
    data: likedRecipes,
    isLoading: isLoadingLiked,
    error: likedError,
  } = useQuery({
    queryKey: ["likedRecipes"],
    queryFn: fetchLikedRecipes,
  });

  if (isLoadingProfile || isLoadingRecipes || isLoadingLiked) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <header className="profile-header">
        <h1>My Profile</h1>
        <div className="profile-info">
          <img
            src={userProfile.profilePicture || "path/to/default-avatar.png"}
            alt={userProfile.name}
            className="profile-picture"
          />
          <h2>{userProfile.name}</h2>
        </div>
      </header>

      <main className="profile-content">
        <section className="recipe-section">
          <h2>My Recipes</h2>
          <div className="recipe-grid">
            {userRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="recipe-section">
          <h2>Liked Recipes</h2>
          <div className="recipe-grid">
            {likedRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
