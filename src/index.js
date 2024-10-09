import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Make sure this line is present
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Region from "./pages/Region";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Recipes from "./pages/Recipes";
import Australia from "./pages/Australia";
import Europe from "./pages/Europe";
import SouthAmerica from "./pages/SouthAmerica";
import NorthAmerica from "./pages/NorthAmerica";
import Asia from "./pages/Asia";
import Africa from "./pages/Africa";
import OneRecipe from "./pages/OneRecipe";
import India from "./pages/India";
import Italy from "./pages/Italy";
import France from "./pages/France";
import Greece from "./pages/Greece";
import Spain from "./pages/Spain";
import Morocco from "./pages/Morocco";
import Ethiopia from "./pages/Ethiopia";
import SouthAfrica from "./pages/SouthAfrica";
import Nigeria from "./pages/Nigeria";
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipes/:recipeId",
        element: <OneRecipe />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/region/:name",
        element: <Region />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/australia",
        element: <Australia />,
      },
      {
        path: "/europe",
        element: <Europe />,
      },
      {
        path: "/south america",
        element: <SouthAmerica />,
      },
      { path: "/north america", element: <NorthAmerica /> },
      { path: "/asia", element: <Asia /> },
      { path: "/india", element: <India /> },
      { path: "/italy", element: <Italy /> },
      { path: "/france", element: <France /> },
      { path: "/africa", element: <Africa /> },
      { path: "/ausralia", element: <Australia /> },
      { path: "/greece", element: <Greece /> },
      { path: "/spain", element: <Spain /> },
      { path: "/morocco", element: <Morocco /> },
      { path: "/ethiopia", element: <Ethiopia /> },
      { path: "/south africa", element: <SouthAfrica /> },
      { path: "/nigeria", element: <Nigeria /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
