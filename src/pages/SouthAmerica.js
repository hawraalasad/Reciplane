import React from "react";
import styled, { keyframes } from "styled-components";
import { Sun, Music, Coffee, Feather, Umbrella, Smile } from "react-feather";
import { motion } from "framer-motion";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;600&display=swap');
`;

const SouthAmericaContainer = motion(styled.div`
  background-color: #1a5f7a; // Deep teal background
  min-height: 100vh;
  padding: 2rem;
  font-family: "Open Sans", sans-serif;
  position: relative;
  overflow: hidden;
`);

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 4.5rem;
  color: #ffd166; // Warm yellow
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
  background-color: #ef476f; // Vibrant pink
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 3px solid #ffd166; // Warm yellow border
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px) rotate(-3deg);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CountryTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #ffd166; // Warm yellow
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
  color: #ffffff;
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

const MachuPicchu = styled.div`
  position: absolute;
  bottom: -50px;
  left: 5%;
  width: 200px;
  height: 100px;
  background-color: #4ecdc4;
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  opacity: 0.3;
`;

const ChristRedeemer = styled.div`
  position: absolute;
  bottom: -30px;
  right: 10%;
  width: 60px;
  height: 150px;
  background-color: #ff6b6b;
  opacity: 0.3;
  &::before {
    content: "";
    position: absolute;
    top: 30px;
    left: -45px;
    width: 150px;
    height: 20px;
    background-color: #ff6b6b;
    border-radius: 10px;
  }
`;

const southAmericanCountries = [
  {
    name: "Peru",
    flag: "🇵🇪",
    recipes: [
      "Ceviche",
      "Lomo Saltado",
      "Aji de Gallina",
      "Causa Rellena",
      "Anticuchos",
    ],
  },
  {
    name: "Argentina",
    flag: "🇦🇷",
    recipes: ["Asado", "Empanadas", "Locro", "Choripán", "Dulce de Leche"],
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
    recipes: ["Feijoada", "Pão de Queijo", "Moqueca", "Brigadeiro", "Acarajé"],
  },
  {
    name: "Colombia",
    flag: "🇨🇴",
    recipes: ["Bandeja Paisa", "Ajiaco", "Arepa", "Sancocho", "Lechona"],
  },
];

const SouthAmerica = () => {
  return (
    <SouthAmericaContainer
      initial={{ opacity: 0, backgroundColor: "#456D1E" }}
      animate={{ opacity: 1, backgroundColor: "#1a5f7a" }}
      transition={{ duration: 0.5 }}
    >
      <Title>Flavors of South America</Title>

      <FloatingElement style={{ top: "5%", left: "5%" }}>
        <Sun size={48} color="#ffd166" />
      </FloatingElement>
      <FloatingElement style={{ top: "15%", right: "10%" }}>
        <Music size={36} color="#ffd166" />
      </FloatingElement>
      <FloatingElement style={{ bottom: "25%", left: "15%" }}>
        <Coffee size={42} color="#ffd166" />
      </FloatingElement>
      <FloatingElement style={{ bottom: "20%", right: "5%" }}>
        <Feather size={40} color="#ffd166" />
      </FloatingElement>
      <FloatingElement style={{ top: "40%", left: "30%" }}>
        <Umbrella size={38} color="#ffd166" />
      </FloatingElement>
      <FloatingElement style={{ top: "60%", right: "25%" }}>
        <Smile size={44} color="#ffd166" />
      </FloatingElement>

      <MachuPicchu />
      <ChristRedeemer />

      <CountryGrid>
        {southAmericanCountries.map((country) => (
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
        ))}
      </CountryGrid>
    </SouthAmericaContainer>
  );
};

export default SouthAmerica;
