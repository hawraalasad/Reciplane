import React from "react";
import styled from "styled-components";
import { Coffee } from "react-feather";
import { motion } from "framer-motion"; // Add this import
import { Link } from "react-router-dom";
const AsiaContainer = motion(styled.div`
  background-color: #fff7ed;
  min-height: 100vh;
  padding: 2rem;
  font-family: "Sora", sans-serif;
`);

const Title = styled.h1`
  font-size: 3rem;
  color: #e63946;
  text-align: center;
  margin-bottom: 2rem;
`;

const CountryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CountryCard = styled.div`
  background-color: ${(props) => props.bgColor || "#FFFFFF"};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CountryTitle = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.textColor || "#000000"};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RecipeList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const RecipeItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${(props) => props.textColor || "#000000"};
  display: flex;
  align-items: center;
`;

const asianCountries = [
  {
    name: "India",
    bgColor: "#FF9933",
    textColor: "#000080",
    flag: "🇮🇳",
    recipes: [
      "Butter Chicken",
      "Vegetable Biryani",
      "Palak Paneer",
      "Tandoori Chicken",
      "Masala Dosa",
    ],
  },
  {
    name: "Japan",
    bgColor: "#FFFFFF",
    textColor: "#BC002D",
    flag: "🇯🇵",
    recipes: [
      "Sushi Rolls",
      "Ramen",
      "Tempura",
      "Miso Soup",
      "Teriyaki Chicken",
    ],
  },
  {
    name: "China",
    bgColor: "#DE2910",
    textColor: "#FFDE00",
    flag: "🇨🇳",
    recipes: [
      "Kung Pao Chicken",
      "Mapo Tofu",
      "Dim Sum",
      "Peking Duck",
      "Hot and Sour Soup",
    ],
  },
  {
    name: "Thailand",
    bgColor: "#00247D",
    textColor: "#FFFFFF",
    flag: "🇹🇭",
    recipes: [
      "Pad Thai",
      "Green Curry",
      "Tom Yum Soup",
      "Mango Sticky Rice",
      "Som Tam (Papaya Salad)",
    ],
  },
  {
    name: "Vietnam",
    bgColor: "#DA251D",
    textColor: "#FFFF00",
    flag: "🇻🇳",
    recipes: ["Pho", "Banh Mi", "Spring Rolls", "Bun Cha", "Vietnamese Coffee"],
  },
  {
    name: "South Korea",
    bgColor: "#FFFFFF",
    textColor: "#000000",
    flag: "🇰🇷",
    recipes: ["Bibimbap", "Kimchi", "Korean BBQ", "Japchae", "Tteokbokki"],
  },
];

const Asia = () => {
  return (
    <AsiaContainer
      initial={{ opacity: 0, backgroundColor: "#456D1E" }}
      animate={{ opacity: 1, backgroundColor: "#fff7ed" }}
      transition={{ duration: 0.5 }}
    >
      <Title>Flavors of Asia</Title>

      <CountryGrid>
        {asianCountries.map((country) => (
          <Link to={`/${country.name}`} key={country.name}>
            <CountryCard key={country.name} bgColor={country.bgColor}>
              <CountryTitle textColor={country.textColor}>
                {country.flag} {country.name}
              </CountryTitle>
              <RecipeList>
                {country.recipes.map((recipe) => (
                  <RecipeItem key={recipe} textColor={country.textColor}>
                    <Coffee size={16} style={{ marginRight: "0.5rem" }} />
                    {recipe}
                  </RecipeItem>
                ))}
              </RecipeList>
            </CountryCard>
          </Link>
        ))}
      </CountryGrid>
    </AsiaContainer>
  );
};

export default Asia;
