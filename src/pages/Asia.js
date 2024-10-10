import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContinentLayout from "../components/ContinentLayout";

const AsiaContainer = motion(styled.div`
  background-color: #fff7ed;
  min-height: 100vh;
  padding: 4rem 2rem 2rem; // Added top padding
  font-family: "Sora", sans-serif;
`);

const Title = styled.h1`
  font-size: 4rem;
  color: #e63946;
  text-align: center;
  margin-bottom: 2rem;
`;

const TitleBanner = styled.span`
  background-color: #ffffff;
  color: #e63946;
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
`;

const CountryCard = styled.div`
  background-color: ${(props) => props.bgColor || "#FFFFFF"};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  min-height: 250px;

  &:hover {
    transform: translateY(-5px) rotate(2deg);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CountryTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.textColor || "#000000"};
  text-align: center;
  margin: 1rem 0;
`;

const CountryFlag = styled.span`
  font-size: 5rem;
  margin-bottom: 1rem;
`;

const asianCountries = [
  {
    name: "India",
    displayName: "Indian Cuisine",
    bgColor: "#FF9933",
    textColor: "#000080",
    flag: "🇮🇳",
  },
  {
    name: "Japan",
    displayName: "Japanese Cuisine",
    bgColor: "#FFFFFF",
    textColor: "#BC002D",
    flag: "🇯🇵",
  },
  {
    name: "China",
    displayName: "Chinese Cuisine",
    bgColor: "#DE2910",
    textColor: "#FFDE00",
    flag: "🇨🇳",
  },
  {
    name: "Iran",
    displayName: "Persian Cuisine",
    bgColor: "#239F40",
    textColor: "#FFFFFF",
    flag: "🇮🇷",
  },
];

const Asia = () => {
  return (
    <ContinentLayout backgroundColor="bg-[#fff7ed]">
      <AsiaContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>
          <TitleBanner>Flavors of Asia</TitleBanner>
        </Title>

        {/* Added gap between title and cards */}
        <div className="mb-24"></div>

        <CountryGrid>
          {asianCountries.map((country) => (
            <Link to={`/${country.name}`} key={country.name}>
              <CountryCard bgColor={country.bgColor}>
                <CountryFlag>{country.flag}</CountryFlag>
                <CountryTitle textColor={country.textColor}>
                  {country.displayName}
                </CountryTitle>
              </CountryCard>
            </Link>
          ))}
        </CountryGrid>
      </AsiaContainer>
    </ContinentLayout>
  );
};

export default Asia;
