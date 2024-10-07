import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "./App.css";
import { continents } from "./continents";
import { Link } from "react-router-dom";
import logo from "./media/logo.jpg";
import { getAllRecipes } from "./API/auth"; // Import the getAllRecipes function

const App = () => {
  const getRecipes = async () => {
    try {
      const allRecipes = await getAllRecipes();
      console.log(allRecipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div style={{ backgroundColor: "#37B0E6", height: "100vh" }}>
      <div className="flex justify-center items-center gap-10">
        <img
          src={logo}
          alt="Reciplane"
          style={{ width: "100px", height: "100px" }}
        />
        <h1 className="text-5xl text-white">Taste the world</h1>
      </div>
      <ComposableMap projection={"geoMercator"}>
        <Geographies geography={continents}>
          {({ geographies }) =>
            geographies.map((geo) => {
              console.log(geo);
              return (
                <Link to={`/region/${geo.properties.continent}`}>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#84B850",
                        stroke: "#456D1E",
                        strokeWidth: 1.5,
                      },
                      hover: {
                        fill: "#456D1E",
                      },
                    }}
                  />
                </Link>
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <button onClick={getRecipes} className="bg-blue-500 text-white p-2">
        Get Recipes
      </button>
    </div>
  );
};

export default App;
