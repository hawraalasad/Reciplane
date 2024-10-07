import React from "react";

import { continents } from "../continents";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import logo from "../media/logo.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#37B0E6]">
      {" "}
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
      </div>
    </div>
  );
};

export default Home;
