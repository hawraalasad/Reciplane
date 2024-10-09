import React, { useState, useEffect } from "react";
import { continents } from "../continents";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import airplaneImage from "../media/airplane.png";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor = createGlobalStyle`
  .plane-cursor {
    cursor: none;
  }
`;

const MapContainer = styled.div`
  width: 80%; // Reduced from 100% to 80%
  max-width: 800px; // Added a max-width
  aspect-ratio: 16 / 10; // Adjusted aspect ratio
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transform: rotate(0deg);
  transition: all 300ms;
  z-index: 10;
  position: relative;

  &:hover {
    transform: rotate(1deg);
  }
`;

const PlaneCursor = styled.img`
  width: 30px;
  height: 30px;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  display: none;
  transform: translate(-50%, -50%) rotate(90deg);
`;

const ExpandingSVG = styled(motion.svg)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999; // Increase this value
  pointer-events: none;
`;

const Home = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isOverMap, setIsOverMap] = useState(false);
  const [expandingContinent, setExpandingContinent] = useState(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMapMouseEnter = () => setIsOverMap(true);
  const handleMapMouseLeave = () => setIsOverMap(false);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleContinentClick = (continent, event) => {
    const path = event.target;
    const svgBoundingRect = path.ownerSVGElement.getBoundingClientRect();
    const pathBoundingRect = path.getBoundingClientRect();

    const centerX =
      (pathBoundingRect.left + pathBoundingRect.right) / 2 -
      svgBoundingRect.left;
    const centerY =
      (pathBoundingRect.top + pathBoundingRect.bottom) / 2 -
      svgBoundingRect.top;

    setExpandingContinent({
      continent,
      path: path.getAttribute("d"),
      centerX,
      centerY,
      clickX: event.clientX,
      clickY: event.clientY,
    });

    setTimeout(() => {
      navigate(`/${continent}`);
    }, 1000); // Reduced from 1500 to 1000
  };

  return (
    <motion.div
      className="flex-grow flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#37B0E6] to-[#84B850] relative overflow-hidden p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CustomCursor />
      <PlaneCursor
        src={airplaneImage}
        alt="Airplane cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y - 15}px`, // Offset by half the height
          display: isOverMap ? "block" : "none",
        }}
      />
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-green-300 rotate-45 animate-spin"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-400 rounded-tl-3xl rounded-br-3xl animate-wiggle"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-red-400 rounded-full animate-float"></div>

      <h1 className="text-5xl font-bold text-white mb-8 animate-pulse z-10">
        Explore the Culinary World!
      </h1>

      <MapContainer
        className="plane-cursor"
        onMouseEnter={handleMapMouseEnter}
        onMouseLeave={handleMapMouseLeave}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 147,
          }}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <Geographies geography={continents}>
            {({ geographies }) =>
              geographies.map((geo) => (
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
                  className="transition-colors duration-300"
                  onClick={(event) =>
                    handleContinentClick(geo.properties.continent, event)
                  }
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </MapContainer>

      <div className="mt-8 text-center text-white text-xl animate-bounce z-10">
        Click on a continent to discover its flavors!
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-20 left-20 w-12 h-12 bg-blue-400 transform rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-orange-400 rounded-tr-3xl rounded-bl-3xl animate-bounce"></div>

      <AnimatePresence>
        {expandingContinent && (
          <ExpandingSVG
            viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="expanding-clip">
                <motion.path
                  d={expandingContinent.path}
                  initial={{
                    scale: 0,
                    x: expandingContinent.clickX - expandingContinent.centerX,
                    y: expandingContinent.clickY - expandingContinent.centerY,
                  }}
                  animate={{
                    scale: 200,
                    x: 0,
                    y: 0,
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }} // Reduced from 1.5 to 1
                />
              </clipPath>
            </defs>
            <motion.rect
              x="0"
              y="0"
              width={window.innerWidth}
              height={window.innerHeight}
              fill="#456D1E"
              clipPath="url(#expanding-clip)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </ExpandingSVG>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
