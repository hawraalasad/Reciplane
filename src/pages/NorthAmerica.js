import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Sun, Coffee, Compass, Umbrella, Map, Flag } from "react-feather";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContinentLayout from "../components/ContinentLayout";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Lato:wght@400;700&display=swap');
`;

const NorthAmericaContainer = motion(styled.div`
  background-color: #87ceeb; // Sky blue background
  min-height: 100vh;
  padding: 4rem 2rem 2rem; // Added top padding
  font-family: "Lato", sans-serif;
  position: relative;
  overflow: hidden;
`);

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 4.5rem;
  color: #ffffff; // White
  text-align: center;
  margin-bottom: 2rem;
`;

const TitleBanner = styled.span`
  background-color: #4682b4; // Steel blue
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: inline-block;
  transform: rotate(-3deg);
`;

const CountryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
`;

const CountryCard = styled.div`
  background-color: #f0f8ff; // Alice blue
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 3px solid #4682b4; // Steel blue border
  transition: all 0.3s ease-in-out;
  height: 250px; // Fixed height
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-5px) rotate(2deg);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background-color: #e6f3ff; // Lighter blue on hover
  }
`;

const CountryTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.8rem; // Slightly reduced font size
  color: #4682b4; // Steel blue
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  flex-grow: 1; // Allow the title to grow and fill available space
`;

const CountryFlag = styled.span`
  font-size: 3rem;
  margin-bottom: 1rem; // Added some margin below the flag
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
  background-color: #b0c4de; // Light steel blue
  opacity: 0.5;
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
    displayName: "American Cuisine",
    flag: "🇺🇸",
  },
  {
    name: "Canada",
    displayName: "Canadian Cuisine",
    flag: "🇨🇦",
  },
  {
    name: "Mexico",
    displayName: "Mexican Cuisine",
    flag: "🇲🇽",
  },
  {
    name: "Jamaica",
    displayName: "Jamaican Cuisine",
    flag: "🇯🇲",
  },
];

const NorthAmerica = () => {
  return (
    <ContinentLayout backgroundColor="bg-[#87CEEB]">
      <>
        <GlobalStyle />
        <NorthAmericaContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Title>
            <TitleBanner>Flavors of North America</TitleBanner>
          </Title>

          {/* Added gap between title and cards */}
          <div className="mb-24"></div>

          {/* Keep all floating elements */}
          <FloatingElement style={{ top: "5%", left: "5%" }}>
            <Sun size={48} color="#FFFFFF" />
          </FloatingElement>
          {/* ... (other floating elements) */}

          <StatueOfLiberty />

          <CountryGrid>
            {northAmericanCountries.map((country) => (
              <Link to={`/${country.name}`} key={country.name}>
                <CountryCard>
                  <CountryFlag>{country.flag}</CountryFlag>
                  <CountryTitle>{country.displayName}</CountryTitle>
                </CountryCard>
              </Link>
            ))}
          </CountryGrid>
        </NorthAmericaContainer>
      </>
    </ContinentLayout>
  );
};

export default NorthAmerica;
