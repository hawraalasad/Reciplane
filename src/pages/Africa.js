import React from "react";
import styled, { keyframes } from "styled-components";
import { Sun, Coffee, Compass, Music } from "react-feather";
import { motion } from "framer-motion"; // Add this import
import { Link } from "react-router-dom";

const AfricaContainer = motion(styled.div`
  background-color: #f0c300;
  min-height: 100vh;
  padding: 2rem;
  font-family: "Kalam", cursive;
  position: relative;
  overflow: hidden;
`);

const Title = styled.h1`
  font-size: 4rem;
  color: #016450;
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
  background-color: #016450;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid #f0c300;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CountryTitle = styled.h2`
  font-size: 1.8rem;
  color: #f0c300;
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
  color: #f0c300;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const FloatingElement = styled.div`
  position: absolute;
  animation: ${float} 3s ease-in-out infinite;
  opacity: 0.6;
`;

const africanCountries = [
  {
    name: "Nigeria",
    bgColor: "#008751",
    textColor: "#FFFFFF",
    flag: "🇳🇬",
    recipes: ["Jollof Rice", "Egusi Soup", "Pounded Yam", "Suya", "Akara"],
  },
  {
    name: "Ethiopia",
    bgColor: "#FCCB00",
    textColor: "#006B3F",
    flag: "🇪🇹",
    recipes: ["Injera", "Doro Wat", "Kitfo", "Tibs", "Shiro"],
  },
  {
    name: "Morocco",
    bgColor: "#C1272D",
    textColor: "#FFFFFF",
    flag: "🇲🇦",
    recipes: ["Tagine", "Couscous", "Pastilla", "Harira", "Makouda"],
  },
  {
    name: "South Africa",
    bgColor: "#007A4D",
    textColor: "#FFB612",
    flag: "🇿🇦",
    recipes: ["Bobotie", "Biltong", "Chakalaka", "Malva Pudding", "Boerewors"],
  },
];

const Africa = () => {
  return (
    <AfricaContainer
      initial={{ opacity: 0, backgroundColor: "#456D1E" }}
      animate={{ opacity: 1, backgroundColor: "#f0c300" }}
      transition={{ duration: 0.5 }}
    >
      <Title>Tastes of Africa</Title>

      <FloatingElement style={{ top: "10%", left: "5%" }}>
        <Sun size={48} color="#016450" />
      </FloatingElement>
      <FloatingElement style={{ top: "20%", right: "10%" }}>
        <Coffee size={36} color="#016450" />
      </FloatingElement>
      <FloatingElement style={{ bottom: "15%", left: "15%" }}>
        <Compass size={42} color="#016450" />
      </FloatingElement>
      <FloatingElement style={{ bottom: "10%", right: "5%" }}>
        <Music size={40} color="#016450" />
      </FloatingElement>

      <CountryGrid>
        {africanCountries.map((country) => (
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
    </AfricaContainer>
  );
};

export default Africa;
