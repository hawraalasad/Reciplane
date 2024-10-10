import React from "react";
import styled, { keyframes } from "styled-components";
import { Coffee, Umbrella, Camera, Compass, Map, Globe } from "react-feather";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContinentLayout from "../components/ContinentLayout";

const EuropeContainer = motion(styled.div`
  background-color: #e0f2ff;
  min-height: 100vh;
  padding: 4rem 2rem 2rem; // Added top padding
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

const TitleBanner = styled.span`
  background-color: #ffffff;
  color: #1e3a8a;
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
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid #1e3a8a;
  transition: all 0.3s ease-in-out;
  min-height: 250px;
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
  color: #1e3a8a;
  margin: 1rem 0;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const CountryFlag = styled.span`
  font-size: 5rem;
  margin-bottom: 1rem;
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
    name: "Italy",
    displayName: "Italian Cuisine",
    flag: "🇮🇹",
  },
  {
    name: "France",
    displayName: "French Cuisine",
    flag: "🇫🇷",
  },
  {
    name: "Spain",
    displayName: "Spanish Cuisine",
    flag: "🇪🇸",
  },
  {
    name: "Greece",
    displayName: "Greek Cuisine",
    flag: "🇬🇷",
  },
];

const Europe = () => {
  return (
    <ContinentLayout backgroundColor="bg-[#e0f2ff]">
      <EuropeContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>
          <TitleBanner>Tastes of Europe</TitleBanner>
        </Title>

        {/* Increased the margin-bottom to create a bigger gap */}
        <div className="mb-24"></div>

        {/* Keep all floating elements */}
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
          <Map size={38} color="#1e3a8a" />
        </FloatingElement>
        <FloatingElement style={{ top: "60%", right: "25%" }}>
          <Globe size={44} color="#1e3a8a" />
        </FloatingElement>

        <EiffelTower />
        <BigBen />

        <CountryGrid>
          {europeanCountries.map((country) => (
            <Link to={`/${country.name}`} key={country.name}>
              <CountryCard>
                <CountryFlag>{country.flag}</CountryFlag>
                <CountryTitle>{country.displayName}</CountryTitle>
              </CountryCard>
            </Link>
          ))}
        </CountryGrid>
      </EuropeContainer>
    </ContinentLayout>
  );
};

export default Europe;
