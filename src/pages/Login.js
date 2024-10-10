import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { checkToken } from "../api/storage";
import styled from "styled-components";

const GradientBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, #37b0e6, #84b850);
  z-index: -1;
`;

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate: handleLogin, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(checkToken());
    },
    onError: (error) => {
      console.error("Login error:", error);
      // You can set an error state here and display it to the user
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  if (user) return <Navigate to={"/"} />;

  return (
    <div className="flex-grow flex justify-center items-center min-h-screen relative overflow-hidden">
      <GradientBackground />
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
          Welcome Hungry Traveller!
        </h1>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="relative group">
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-[#84B850] rounded-full text-lg focus:outline-none focus:border-[#37B0E6] transition-colors duration-300"
              placeholder="Your Traveller Name"
            />
            <div className="absolute right-4 top-3 w-6 h-6 border-2 border-[#84B850] rounded-full group-hover:animate-spin"></div>
          </div>

          <div className="relative group">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-[#84B850] rounded-full text-lg focus:outline-none focus:border-[#37B0E6] transition-colors duration-300"
              placeholder="Secret Recipe"
            />
            <div className="absolute right-4 top-3 w-6 h-6 bg-[#84B850] rounded-sm group-hover:animate-bounce"></div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-[#84B850] text-white rounded-full text-xl font-bold hover:bg-[#37B0E6] transition-all duration-300 transform hover:scale-105 hover:rotate-1 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            Start Your Culinary Journey!
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-[#37B0E6] animate-bounce">
          Click to start your gastronomic adventure!
        </div>

        {error && <div className="text-red-500">{error.message}</div>}
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-lg animate-pulse">
        Discover flavors from around the world!
      </div>
    </div>
  );
};

export default Login;
