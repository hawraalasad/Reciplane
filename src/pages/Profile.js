import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../api/auth";
import { User, Mail, Book } from "react-feather";

const Profile = () => {
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

  return (
    <div className="bg-gradient-to-b from-[#37B0E6] to-[#84B850] min-h-screen p-8 flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-green-300 rotate-45 animate-spin"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-400 rounded-tl-3xl rounded-br-3xl animate-wiggle"></div>

      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500 max-w-md w-full">
        <h2 className="text-3xl text-gray-800 font-bold mb-6 flex items-center justify-center">
          <User className="mr-2 text-blue-500" /> Profile
        </h2>
        <div className="mb-4 flex items-center">
          <User className="mr-3 text-green-500" />
          <span className="text-xl text-gray-700 font-semibold">
            {profile?.username}
          </span>
        </div>
        <div className="mb-4 flex items-center">
          <Mail className="mr-3 text-yellow-500" />
          <span className="text-xl text-gray-700">{profile?.email}</span>
        </div>
        <div className="flex items-center">
          <Book className="mr-3 text-red-500" />
          <span className="text-xl text-gray-700">
            {profile?.recipes.length} recipes
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
