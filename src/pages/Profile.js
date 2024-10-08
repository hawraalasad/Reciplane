import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchUserProfile,
  fetchUserRecipes,
  fetchLikedRecipes,
} from "../api/userApi";

const Profile = () => {
  const { data: userProfile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });

  const { data: userRecipes, isLoading: isLoadingRecipes } = useQuery({
    queryKey: ["userRecipes"],
    queryFn: fetchUserRecipes,
  });

  const { data: likedRecipes, isLoading: isLoadingLiked } = useQuery({
    queryKey: ["likedRecipes"],
    queryFn: fetchLikedRecipes,
  });

  if (isLoadingProfile || isLoadingRecipes || isLoadingLiked) {
    return <div className="loading">Preparing your culinary adventure...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-[#37B0E6] to-[#84B850] min-h-screen p-8 text-white">
      <header className="profile-header mb-8">
        <h1 className="text-4xl font-bold mb-4">My Culinary Journey</h1>
        <div className="profile-info flex items-center">
          <img
            src={userProfile.profilePicture || "/default-avatar.png"}
            alt={userProfile.name}
            className="w-24 h-24 rounded-full border-4 border-white mr-4"
          />
          <h2 className="text-2xl font-semibold">{userProfile.name}</h2>
        </div>
      </header>

      <main className="profile-content">
        <section className="recipe-section mb-8">
          <h2 className="text-3xl font-bold mb-4">My Recipes</h2>
          <div className="recipe-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <h3 className="text-[#37B0E6] font-semibold text-lg p-4">
                  {recipe.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section className="recipe-section">
          <h2 className="text-3xl font-bold mb-4">Liked Recipes</h2>
          <div className="recipe-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {likedRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <h3 className="text-[#37B0E6] font-semibold text-lg p-4">
                  {recipe.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
