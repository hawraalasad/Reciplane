import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
import { checkToken } from "../api/storage";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { mutate: registerMutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(checkToken());
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    registerMutate();
  };

  if (user) return <Navigate to={"/"} />;

  return (
    <div className="flex-grow flex justify-center items-center bg-[#37B0E6] min-h-screen relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-green-300 rotate-45 animate-spin"></div>

      {/* New shape elements */}
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-400 rounded-tl-3xl rounded-br-3xl animate-wiggle"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-red-400 rounded-full animate-float"></div>
      <div className="absolute top-20 right-20 w-12 h-12 bg-blue-400 transform rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-orange-400 rounded-tr-3xl rounded-bl-3xl animate-bounce"></div>

      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-2xl transform rotate-2 relative z-10 hover:rotate-0 transition-all duration-300">
        <h1 className="text-4xl mb-6 text-center text-[#37B0E6] font-bold animate-pulse">
          Join the Adventure!
        </h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="relative group">
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-[#84B850] rounded-full text-lg focus:outline-none focus:border-[#37B0E6] transition-colors duration-300"
              placeholder="Your Email"
            />
            <div className="absolute right-4 top-3 w-6 h-6 border-2 border-[#84B850] rounded-full group-hover:animate-spin"></div>
          </div>

          <div className="relative group">
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-[#84B850] rounded-full text-lg focus:outline-none focus:border-[#37B0E6] transition-colors duration-300"
              placeholder="Choose Your Explorer Name"
            />
            <div className="absolute right-4 top-3 w-6 h-6 bg-[#84B850] rounded-sm group-hover:animate-bounce"></div>
          </div>

          <div className="relative group">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-[#84B850] rounded-full text-lg focus:outline-none focus:border-[#37B0E6] transition-colors duration-300"
              placeholder="Create Secret Passcode"
            />
            <div className="absolute right-4 top-3 w-6 h-6 bg-[#84B850] rounded-full group-hover:animate-pulse"></div>
          </div>

          <div className="relative group">
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-[#84B850] rounded-full text-lg focus:outline-none focus:border-[#37B0E6] transition-colors duration-300
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-[#37B0E6] file:text-white
                hover:file:bg-[#84B850]"
            />
            <div className="absolute right-4 top-3 w-6 h-6 bg-[#84B850] transform rotate-45 group-hover:animate-spin"></div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-[#84B850] text-white rounded-full text-xl font-bold hover:bg-[#37B0E6] transition-all duration-300 transform hover:scale-105 hover:rotate-1 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Start Your Journey!
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-[#37B0E6] animate-bounce">
          Click to begin your culinary expedition!
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-lg animate-pulse">
        Explore flavors from around the world!
      </div>
    </div>
  );
};

export default Register;
