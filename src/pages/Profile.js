import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../api/auth";
import { Book, Heart } from "react-feather";
import { Link } from "react-router-dom";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("myRecipes");
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getMyProfile,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const RecipeGrid = ({ recipes }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
      {recipes?.map((recipe) => (
        <Link
          to={`/recipes/${recipe._id}`}
          key={recipe._id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <img
            src={
              recipe.image
                ? `http://localhost:8000/${recipe.image}`
                : "https://cdn-icons-png.freepik.com/512/8344/8344718.png"
            }
            alt={recipe.name}
            className="w-full h-80 object-cover rounded-md mb-4"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-center text-gray-800">
              {recipe.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-[#37B0E6] to-[#84B850] min-h-screen p-8 flex flex-col items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-green-300 rotate-45 animate-spin"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-400 rounded-tl-3xl rounded-br-3xl animate-wiggle"></div>

      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500 max-w-md w-full mb-8">
        <div className="flex items-center justify-center mb-4">
          <img
            src={"http://localhost:8000/" + profile?.image}
            alt={profile?.username}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
          />
        </div>
        <h2 className="text-3xl text-gray-800 font-bold mb-4 text-center">
          {profile?.username}
        </h2>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center">
            <Book className="mr-2 text-blue-500" />
            <span className="text-xl text-gray-700">
              {profile?.recipes?.length || 0} recipes
            </span>
          </div>
          <div className="flex items-center">
            <Heart className="mr-2 text-red-500" />
            <span className="text-xl text-gray-700">
              {profile?.likedRecipes?.length || 0} liked
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mb-8">
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === "myRecipes"
                ? "bg-white text-blue-500"
                : "bg-blue-500 text-white"
            }`}
            onClick={() => setActiveTab("myRecipes")}
          >
            My Recipes
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === "likedRecipes"
                ? "bg-white text-blue-500"
                : "bg-blue-500 text-white"
            }`}
            onClick={() => setActiveTab("likedRecipes")}
          >
            Liked Recipes
          </button>
        </div>

        {activeTab === "myRecipes" && (
          <>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              My Recipes
            </h3>
            <RecipeGrid recipes={profile?.recipes} />
            {profile?.recipes?.length === 0 && (
              <p className="text-white text-xl mt-4 text-center">
                You haven't created any recipes yet.
              </p>
            )}
          </>
        )}

        {activeTab === "likedRecipes" && (
          <>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Liked Recipes
            </h3>
            <RecipeGrid recipes={profile?.likedRecipes} />
            {profile?.likedRecipes?.length === 0 && (
              <p className="text-white text-xl mt-4 text-center">
                You haven't liked any recipes yet.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
