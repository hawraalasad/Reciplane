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
import Oceania from "./pages/Oceania";
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
import Canada from "./pages/Canada";
import UnitedStates from "./pages/UnitedStates";
import Mexico from "./pages/Mexico";
import Jamaica from "./pages/Jamaica";
import Peru from "./pages/Peru";
import Argentina from "./pages/Argentina";
import Colombia from "./pages/Colombia";
import Brazil from "./pages/Brazil";
import Australia from "./pages/Australia";
import Fiji from "./pages/Fiji";
import PapuaNewGuinea from "./pages/PapuaNewGuinea";
import NewZealand from "./pages/NewZealand";
import Iran from "./pages/Iran";
import Japan from "./pages/Japan";
import China from "./pages/China";
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
        path: "/Oceania",
        element: <Oceania />,
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
      { path: "/oceania", element: <Oceania /> },
      { path: "/greece", element: <Greece /> },
      { path: "/spain", element: <Spain /> },
      { path: "/morocco", element: <Morocco /> },
      { path: "/ethiopia", element: <Ethiopia /> },
      { path: "/south africa", element: <SouthAfrica /> },
      { path: "/nigeria", element: <Nigeria /> },
      { path: "/canada", element: <Canada /> },
      { path: "/united states", element: <UnitedStates /> },
      { path: "/mexico", element: <Mexico /> },
      { path: "/jamaica", element: <Jamaica /> },
      { path: "/peru", element: <Peru /> },
      { path: "/argentina", element: <Argentina /> },
      { path: "/colombia", element: <Colombia /> },
      { path: "/brazil", element: <Brazil /> },
      { path: "/australia", element: <Australia /> },
      { path: "/fiji", element: <Fiji /> },
      { path: "/papua new guinea", element: <PapuaNewGuinea /> },
      { path: "/new zealand", element: <NewZealand /> },
      { path: "/iran", element: <Iran /> },
      { path: "/japan", element: <Japan /> },
      { path: "/china", element: <China /> },
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
