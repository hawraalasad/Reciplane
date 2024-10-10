import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Sun, Coffee, Compass, Music } from "react-feather";
import { motion } from "framer-motion"; // Add this import
import { Link } from "react-router-dom";
import ContinentLayout from "../components/ContinentLayout";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap');
`;

const AfricaContainer = motion(styled.div`
  background-color: #f0c300;
  min-height: 100vh;
  padding: 4rem 2rem 2rem; // Added top padding
  font-family: "Baloo 2", cursive;
  position: relative;
  overflow: hidden;
`);

const Title = styled.h1`
  font-size: 4.5rem;
  color: #016450;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
`;

const TitleBanner = styled.span`
  background-color: #ffffff;
  color: #016450;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: inline-block;
  transform: rotate(-3deg);
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
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid #f0c300;
  transition: all 0.3s ease-in-out;
  height: 280px; // Increased fixed height
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-5px) rotate(2deg);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CountryTitle = styled.h2`
  font-size: 2rem;
  color: #f0c300;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  flex-grow: 1; // Allow the title to grow and fill available space
  display: flex;
  align-items: center;
`;

const CountryFlag = styled.span`
  font-size: 4rem;
  margin-bottom: 1rem;
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
    displayName: "Nigerian Cuisine",
    flag: "🇳🇬",
  },
  {
    name: "Ethiopia",
    displayName: "Ethiopian Cuisine",
    flag: "🇪🇹",
  },
  {
    name: "Morocco",
    displayName: "Moroccan Cuisine",
    flag: "🇲🇦",
  },
  {
    name: "South Africa",
    displayName: "South African Cuisine",
    flag: "🇿🇦",
  },
];

const Africa = () => {
  return (
    <ContinentLayout backgroundColor="bg-[#f0c300]">
      <>
        <GlobalStyle />
        <AfricaContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Title>
            <TitleBanner>Tastes of Africa</TitleBanner>
          </Title>

          {/* Added gap between title and cards */}
          <div className="mb-24"></div>

          <FloatingElement style={{ top: "10%", left: "5%" }}>
            <Sun size={48} color="#016450" />
          </FloatingElement>
          {/* ... (other floating elements) */}

          <CountryGrid>
            {africanCountries.map((country) => (
              <Link to={`/${country.name}`} key={country.name}>
                <CountryCard>
                  <CountryFlag>{country.flag}</CountryFlag>
                  <CountryTitle>{country.displayName}</CountryTitle>
                </CountryCard>
              </Link>
            ))}
          </CountryGrid>
        </AfricaContainer>
      </>
    </ContinentLayout>
  );
};

export default Africa;
