import React from "react";
import styled, { keyframes } from "styled-components";
import { Coffee, Umbrella, Camera, Compass, Map, Globe } from "react-feather";
import { motion } from "framer-motion"; // Add this import
import { Link } from "react-router-dom";

const EuropeContainer = motion(styled.div`
  background-color: #e0f2ff;
  min-height: 100vh;
  padding: 2rem;
  font-family: "Playfair Display", serif;
  position: relative;
  overflow: hidden;
`);

const Title = styled.h1`
  font-size: 4.5rem;
  color: #1e3a8a;
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
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid #1e3a8a;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px) rotate(2deg);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CountryTitle = styled.h2`
  font-size: 2rem;
  color: #1e3a8a;
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
  color: #4b5563;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const FloatingElement = styled.div`
  position: absolute;
  animation: ${float} 6s ease-in-out infinite;
  opacity: 0.7;
`;

const EiffelTower = styled.div`
  position: absolute;
  bottom: -50px;
  left: 10%;
  width: 100px;
  height: 200px;
  background-color: #1e3a8a;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  opacity: 0.2;
`;

const BigBen = styled.div`
  position: absolute;
  bottom: -30px;
  right: 15%;
  width: 60px;
  height: 180px;
  background-color: #1e3a8a;
  opacity: 0.2;
  &::before {
    content: "";
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: #1e3a8a;
    border-radius: 50% 50% 0 0;
  }
`;

const europeanCountries = [
  {
    name: "France",
    flag: "🇫🇷",
    recipes: [
      "Coq au Vin",
      "Ratatouille",
      "Crème Brûlée",
      "Quiche Lorraine",
      "Bouillabaisse",
    ],
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    recipes: [
      "Margherita Pizza",
      "Spaghetti Carbonara",
      "Risotto",
      "Tiramisu",
      "Osso Buco",
    ],
  },
  {
    name: "Spain",
    flag: "🇪🇸",
    recipes: [
      "Paella",
      "Gazpacho",
      "Tortilla Española",
      "Churros",
      "Patatas Bravas",
    ],
  },
  {
    name: "Greece",
    flag: "🇬🇷",
    recipes: ["Moussaka", "Souvlaki", "Greek Salad", "Spanakopita", "Baklava"],
  },
];

const Europe = () => {
  return (
    <EuropeContainer
      initial={{ opacity: 0, backgroundColor: "#456D1E" }}
      animate={{ opacity: 1, backgroundColor: "#e0f2ff" }}
      transition={{ duration: 0.5 }}
    >
      <Title>Tastes of Europe</Title>

      <FloatingElement style={{ top: "5%", left: "5%" }}>
        <Coffee size={48} color="#1e3a8a" />
      </FloatingElement>
      <FloatingElement style={{ top: "15%", right: "10%" }}>
        <Umbrella size={36} color="#1e3a8a" />
      </FloatingElement>
      <FloatingElement style={{ bottom: "25%", left: "15%" }}>
        <Camera size={42} color="#1e3a8a" />
      </FloatingElement>
      <FloatingElement style={{ bottom: "20%", right: "5%" }}>
        <Compass size={40} color="#1e3a8a" />
      </FloatingElement>
      <FloatingElement style={{ top: "40%", left: "30%" }}>
        <Globe size={38} color="#1e3a8a" />
      </FloatingElement>
      <FloatingElement style={{ top: "60%", right: "25%" }}>
        <Map size={44} color="#1e3a8a" />
      </FloatingElement>

      <EiffelTower />
      <BigBen />

      <CountryGrid>
        {europeanCountries.map((country) => (
          <Link to={`/${country.name}`} key={country.name}>
            <CountryCard key={country.name}>
              <CountryTitle>
                {country.flag} {country.name}
              </CountryTitle>
              <RecipeList>
                {country.recipes.map((recipe) => (
                  <RecipeItem key={recipe}>
                    <Coffee size={18} style={{ marginRight: "0.5rem" }} />
                    {recipe}
                  </RecipeItem>
                ))}
              </RecipeList>
            </CountryCard>
          </Link>
        ))}
      </CountryGrid>
    </EuropeContainer>
  );
};

export default Europe;
