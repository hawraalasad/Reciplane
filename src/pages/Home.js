import React, { useState, useEffect } from "react";
import { continents } from "../continents";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import airplaneImage from "../media/airplane.png";
import { motion, AnimatePresence } from "framer-motion";
import {
  GiCookingPot,
  GiKnifeFork,
  GiCupcake,
  GiGloves,
  GiCoffeeCup,
  GiWineGlass,
  GiChopsticks,
  GiNoodles,
  GiPizzaSlice,
  GiFruitBowl,
} from "react-icons/gi";

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
  transition: all 300ms;
  z-index: 10;
  position: relative;

  &:hover {
    transform: scale(1.05); // Scale up by 5% on hover
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
  z-index: 10000; // Increased to be higher than the navbar
  pointer-events: none;
`;

const continentColors = {
  Asia: "#fff7ed",
  Africa: "#f0c300",
  Europe: "#e0f2ff",
  NorthAmerica: "#87ceeb",
  SouthAmerica: "#84B850",
  Australia: "#FFD700",
  Antarctica: "#FFFFFF",
};

const CookingIcon = styled(motion.div)`
  position: relative;
  font-size: ${(props) => props.size || "60px"}; // Increased default size
  color: white;
  cursor: pointer;
  overflow: visible;
`;

const steamAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0.7;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    transform: translateY(-70px) translateX(-30px) scale(2);
    opacity: 0;
  }
`;

const Steam = styled.div`
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  filter: blur(8px);
  animation: ${steamAnimation} 4s ease-out infinite;
`;

const GradientBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, #37b0e6, #84b850);
  z-index: -1;
`;

const Home = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isOverMap, setIsOverMap] = useState(false);
  const [expandingContinent, setExpandingContinent] = useState(null);
  const navigate = useNavigate();
  const [isHoveringPot, setIsHoveringPot] = useState(false);

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
    const svgElement = path.ownerSVGElement;
    const viewBox = svgElement.viewBox.baseVal;
    const svgWidth = viewBox.width;
    const svgHeight = viewBox.height;

    const bbox = path.getBBox();
    const centerX = bbox.x + bbox.width;
    const centerY = bbox.y + bbox.height / 2;

    let translateX = svgWidth / 2 - centerX;
    let translateY = svgHeight / 2 - centerY;
    console.log(translateX);

    if (continent === "Asia") {
      translateX = -12000;
    }

    setExpandingContinent({
      continent,
      path: path.getAttribute("d"),
      translateX,
      translateY,
    });

    setTimeout(() => {
      navigate(`/${continent}`);
    }, 800);
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center min-h-screen relative overflow-hidden p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GradientBackground />
      <CustomCursor />
      <PlaneCursor
        src={airplaneImage}
        alt="Airplane cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y - 15}px`,
          display: isOverMap ? "block" : "none",
        }}
      />

      <div className="flex items-center mb-8 w-full max-w-4xl">
        <CookingIcon
          className="mr-4 flex-shrink-0"
          size="120px"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onMouseEnter={() => setIsHoveringPot(true)}
          onMouseLeave={() => setIsHoveringPot(false)}
        >
          <GiCookingPot />
          {isHoveringPot && (
            <>
              <Steam style={{ left: "20%", animationDelay: "0s" }} />
              <Steam style={{ left: "35%", animationDelay: "0.6s" }} />
              <Steam style={{ left: "50%", animationDelay: "1.2s" }} />
              <Steam style={{ left: "65%", animationDelay: "1.8s" }} />
              <Steam style={{ left: "80%", animationDelay: "2.4s" }} />
            </>
          )}
        </CookingIcon>

        <div className="flex-grow flex justify-center">
          <h1 className="text-5xl font-bold text-white animate-pulse z-10 text-center max-w-2xl">
            Explore Recipes from All Over the World!
          </h1>
        </div>
      </div>

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
                  initial={{ scale: 1, x: 0, y: 0 }}
                  animate={{
                    scale: 50, // Increased scale for faster zoom
                    x: expandingContinent.translateX,
                    y: expandingContinent.translateY,
                  }}
                  transition={{
                    duration: 0.8, // Reduced duration
                    ease: "easeInOut",
                  }}
                />
              </clipPath>
            </defs>
            <motion.rect
              x="0"
              y="0"
              width={window.innerWidth}
              height={window.innerHeight}
              clipPath="url(#expanding-clip)"
              initial={{ fill: "#456D1E" }}
              animate={{ fill: continentColors[expandingContinent.continent] }}
              transition={{ duration: 0.8, ease: "easeInOut" }} // Reduced duration
            />
          </ExpandingSVG>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
