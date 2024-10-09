import React from "react";
import styled, { keyframes } from "styled-components";
import { Sun, Compass, Anchor, Wind, Sunset, Umbrella } from "react-feather";
import { motion } from "framer-motion";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Caveat:wght@400;700&display=swap');
`;

const OceaniaContainer = motion(styled.div`
  background-color: #ffa07a; // Light salmon
  min-height: 100vh;
  padding: 2rem;
  font-family: "Quicksand", sans-serif;
  position: relative;
  overflow: hidden;
`);

const Title = styled.h1`
  font-family: "Caveat", cursive;
  font-weight: 700;
  font-size: 4.5rem;
  color: #00008b; // Dark blue
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const CountryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
`;

const CountryCard = styled.div`
  background-color: #87ceeb; // Sky blue
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 3px solid #00008b; // Dark blue border
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px) rotate(2deg);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CountryTitle = styled.h2`
  font-family: "Caveat", cursive;
  font-weight: 700;
  font-size: 2rem;
  color: #00008b; // Dark blue
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const RecipeList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const RecipeItem = styled.li`
  margin-bottom: 0.7rem;
  color: #00008b; // Dark blue
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const FloatingElement = styled.div`
  position: absolute;
  animation: ${float} 6s ease-in-out infinite;
  opacity: 0.7;
`;

const SydneyOperaHouse = styled.div`
  position: absolute;
  bottom: -30px;
  left: 5%;
  width: 120px;
  height: 60px;
  background-color: #ffffff;
  opacity: 0.3;
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
`;

const OceanianCountries = [
  {
    name: "Australia",
    flag: "🇦🇺",
    recipes: [
      "Meat Pie",
      "Vegemite on Toast",
      "Pavlova",
      "Lamingtons",
      "Barramundi",
    ],
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    recipes: [
      "Hangi",
      "Lamb Roast",
      "Hokey Pokey Ice Cream",
      "Whitebait Fritters",
      "Pavlova",
    ],
  },
  {
    name: "Fiji",
    flag: "🇫🇯",
    recipes: ["Kokoda", "Lovo", "Rourou", "Cassava Cake", "Duruka"],
  },
  {
    name: "Papua New Guinea",
    flag: "🇵🇬",
    recipes: ["Mumu", "Sago", "Kaukau", "Kokoda", "Aibika"],
  },
];

const Oceania = () => {
  return (
    <>
      <GlobalStyle />
      <OceaniaContainer
        initial={{ opacity: 0, backgroundColor: "#ff7f50" }}
        animate={{ opacity: 1, backgroundColor: "#ffa07a" }}
        transition={{ duration: 0.5 }}
      >
        <Title>Tastes of Oceania</Title>

        <FloatingElement style={{ top: "5%", left: "5%" }}>
          <Sun size={48} color="#00008b" />
        </FloatingElement>
        <FloatingElement style={{ top: "15%", right: "10%" }}>
          <Compass size={36} color="#00008b" />
        </FloatingElement>
        <FloatingElement style={{ bottom: "25%", left: "15%" }}>
          <Anchor size={42} color="#00008b" />
        </FloatingElement>
        <FloatingElement style={{ bottom: "20%", right: "5%" }}>
          <Wind size={40} color="#00008b" />
        </FloatingElement>
        <FloatingElement style={{ top: "40%", left: "30%" }}>
          <Sunset size={38} color="#00008b" />
        </FloatingElement>
        <FloatingElement style={{ top: "60%", right: "25%" }}>
          <Umbrella size={44} color="#00008b" />
        </FloatingElement>

        <SydneyOperaHouse />

        <CountryGrid>
          {OceanianCountries.map((country) => (
            <Link to={`/${country.name}`} key={country.name}>
              <CountryCard key={country.name}>
                <CountryTitle>
                  {country.flag} {country.name}
                </CountryTitle>
                <RecipeList>
                  {country.recipes.map((recipe) => (
                    <RecipeItem key={recipe}>
                      <Sun size={18} style={{ marginRight: "0.5rem" }} />
                      {recipe}
                    </RecipeItem>
                  ))}
                </RecipeList>
              </CountryCard>
            </Link>
          ))}
        </CountryGrid>
      </OceaniaContainer>
    </>
  );
};

export default Oceania;
