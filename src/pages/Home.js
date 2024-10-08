import React from "react";
import { continents } from "../continents";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex-grow flex justify-center items-center mt-0 bg-[#37B0E6]">
      <ComposableMap projection="geoMercator">
        <Geographies geography={continents}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Link key={geo.rsmKey} to={`/region/${geo.properties.continent}`}>
                <Geography
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
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default Home;
