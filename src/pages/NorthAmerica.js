import React from "react";
import styled, { keyframes } from "styled-components";
import { Sun, Coffee, Compass, Umbrella, Map, Flag } from "react-feather";
import { motion } from "framer-motion";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Lato:wght@400;700&display=swap');
`;

const NorthAmericaContainer = motion(styled.div`
  background-color: #3498db; // Sky blue background
  min-height: 100vh;
  padding: 2rem;
  font-family: "Lato", sans-serif;
  position: relative;
  overflow: hidden;
`);

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 4.5rem;
  color: #ecf0f1; // Light gray
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
  background-color: #2ecc71; // Emerald green
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 3px solid #ecf0f1; // Light gray border
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px) rotate(2deg);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CountryTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #ecf0f1; // Light gray
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
  color: #ecf0f1; // Light gray
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

const StatueOfLiberty = styled.div`
  position: absolute;
  bottom: -30px;
  left: 5%;
  width: 60px;
  height: 150px;
  background-color: #ecf0f1;
  opacity: 0.3;
  &::before {
    content: "";
    position: absolute;
    top: -30px;
    left: 20px;
    width: 20px;
    height: 30px;
    background-color: #ecf0f1;
    border-radius: 50% 50% 0 0;
  }
`;

const northAmericanCountries = [
  {
    name: "United States",
    flag: "🇺🇸",
    recipes: [
      "Hamburger",
      "Apple Pie",
      "Barbecue Ribs",
      "Clam Chowder",
      "Buffalo Wings",
    ],
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    recipes: [
      "Poutine",
      "Maple Syrup Pancakes",
      "Butter Tarts",
      "Nanaimo Bars",
      "Montreal-style Bagels",
    ],
  },
  {
    name: "Mexico",
    flag: "🇲🇽",
    recipes: [
      "Tacos al Pastor",
      "Guacamole",
      "Chiles en Nogada",
      "Pozole",
      "Mole Poblano",
    ],
  },
  {
    name: "Jamaica",
    flag: "🇯🇲",
    recipes: [
      "Jerk Chicken",
      "Ackee and Saltfish",
      "Jamaican Patties",
      "Rice and Peas",
      "Rum Cake",
    ],
  },
];

const NorthAmerica = () => {
  return (
    <>
      <GlobalStyle />
      <NorthAmericaContainer
        initial={{ opacity: 0, backgroundColor: "#2c3e50" }}
        animate={{ opacity: 1, backgroundColor: "#3498db" }}
        transition={{ duration: 0.5 }}
      >
        <Title>Flavors of North America</Title>

        <FloatingElement style={{ top: "5%", left: "5%" }}>
          <Sun size={48} color="#ecf0f1" />
        </FloatingElement>
        <FloatingElement style={{ top: "15%", right: "10%" }}>
          <Map size={36} color="#ecf0f1" />
        </FloatingElement>
        <FloatingElement style={{ bottom: "25%", left: "15%" }}>
          <Coffee size={42} color="#ecf0f1" />
        </FloatingElement>
        <FloatingElement style={{ bottom: "20%", right: "5%" }}>
          <Compass size={40} color="#ecf0f1" />
        </FloatingElement>
        <FloatingElement style={{ top: "40%", left: "30%" }}>
          <Flag size={38} color="#ecf0f1" />
        </FloatingElement>
        <FloatingElement style={{ top: "60%", right: "25%" }}>
          <Umbrella size={44} color="#ecf0f1" />
        </FloatingElement>

        <StatueOfLiberty />

        <CountryGrid>
          {northAmericanCountries.map((country) => (
            <CountryCard key={country.name}>
              <CountryTitle>
                {country.flag} {country.name}
              </CountryTitle>
              <RecipeList>
                {country.recipes.map((recipe) => (
                  <RecipeItem key={recipe}>
                    <Compass size={18} style={{ marginRight: "0.5rem" }} />
                    {recipe}
                  </RecipeItem>
                ))}
              </RecipeList>
            </CountryCard>
          ))}
        </CountryGrid>
      </NorthAmericaContainer>
    </>
  );
};

export default NorthAmerica;
