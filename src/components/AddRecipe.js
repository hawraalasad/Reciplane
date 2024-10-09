import React, { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createRecipe } from "../api/recipes";
import Select from "react-select";
import countryList from "../data/countries";
import ingredients from "../data/ingredients";
import {
  MapPin,
  Compass,
  FileText,
  Anchor,
  X,
  Image,
  Plus,
} from "react-feather";
import continents from "../data/continents";
import { motion } from "framer-motion";
import { Utensils, List } from "lucide-react";
import instance from "../api/index";
import CreatableSelect from "react-select/creatable";
import { getIngredients } from "../api/ingredient";

const AddRecipe = ({ show, onClose, username, isLoggedIn }) => {
  const [title, setTitle] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(countryList);
  const [customIngredient, setCustomIngredient] = useState("");
  const [allIngredients, setAllIngredients] = useState([]);
  const queryClient = useQueryClient();

  const createRecipeMutation = useMutation({
    mutationFn: createRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries("recipes");
      onClose();
    },
  });

  const { data: ingredients } = useQuery({
    queryKey: ["getIngredients"],
    queryFn: getIngredients,
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      country: selectedCountry.value,
      ingredients: selectedIngredients.map((ing) => ing.value),
      instructions,
      continent: selectedContinent.value,
      image: image,
    };

    console.log(newRecipe);
    createRecipeMutation.mutate(newRecipe);
  };

  // Custom filter function for case-insensitive searching
  const customFilter = (option, inputValue) => {
    const searchValue = inputValue.toLowerCase();
    if (typeof option.label === "string") {
      return option.label.toLowerCase().includes(searchValue);
    } else if (React.isValidElement(option.label)) {
      // For ingredient options with emoji
      const ingredientName = option.label.props.children[1].props.children;
      return ingredientName.toLowerCase().includes(searchValue);
    }
    return option.value.toLowerCase().includes(searchValue);
  };

  useEffect(() => {
    if (selectedContinent) {
      const filtered = countryList.filter(
        (country) => country.continent === selectedContinent.value
      );
      setFilteredCountries(filtered);
      setSelectedCountry(null); // Reset country selection when continent changes
    } else {
      setFilteredCountries(countryList);
    }
  }, [selectedContinent]);

  const inputStyle =
    "w-full px-4 py-2 bg-white border-2 border-[#84B850] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#456D1E] font-adventure text-[#1A4D1A]";
  const labelStyle =
    "block text-[#1A4D1A] text-lg font-adventure mb-2 flex items-center";

  const selectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "white",
      borderColor: "#84B850",
      borderRadius: "0.5rem",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#456D1E" : "white",
      color: state.isSelected ? "white" : "#1A4D1A",
      "&:hover": {
        backgroundColor: "#84B850",
        color: "white",
      },
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
  };

  if (!show) return null;

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-[#37B0E6] rounded-lg shadow-lg p-8 max-w-2xl w-full text-center">
          <h2 className="text-3xl text-[#1A4D1A] font-adventure mb-6">
            Please Log In
          </h2>
          <p className="text-[#1A4D1A] font-adventure mb-4">
            You need to be logged in to add a new recipe.
          </p>
          <button
            onClick={onClose}
            className="bg-[#84B850] text-white py-2 px-4 rounded-md hover:bg-[#456D1E] transition-colors duration-300 font-adventure font-bold"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-gradient-to-br from-[#37B0E6] to-[#84B850] rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 text-white"
          onClick={onClose}
        >
          <X size={24} />
        </motion.button>
        <h2 className="text-4xl font-bold text-white mb-8 text-center font-adventure">
          Chart Your Recipe
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className={labelStyle}>
              <Utensils className="mr-2" /> Recipe Name
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputStyle}
              required
              placeholder="Enter recipe name"
            />
          </div>
          <div>
            <label htmlFor="image" className={labelStyle}>
              <Image className="mr-2" /> Recipe Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className={inputStyle}
              required
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Recipe preview"
                className="mt-2 max-w-full h-auto rounded-md"
              />
            )}
          </div>
          <div>
            <label htmlFor="continent" className={labelStyle}>
              <Compass className="mr-2" /> Continent
            </label>
            <Select
              options={continents}
              onChange={(selected) => setSelectedContinent(selected)}
              value={selectedContinent}
              className="font-adventure"
              placeholder="Select a continent"
              styles={selectStyles}
            />
          </div>
          <div>
            <label htmlFor="country" className={labelStyle}>
              <MapPin className="mr-2" /> Origin
            </label>
            <Select
              options={filteredCountries}
              onChange={setSelectedCountry}
              value={selectedCountry}
              className="font-adventure"
              isDisabled={!selectedContinent}
              placeholder="Select a country"
              styles={selectStyles}
              required
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label htmlFor="ingredients" className={labelStyle}>
              <List className="mr-2" /> Ingredients
            </label>
            <CreatableSelect
              isMulti
              options={ingredients?.map((ing) => ({
                value: ing.name.toLowerCase(),
                label: (
                  <div className="flex items-center">
                    <span className="mr-2">{ing.emoji}</span>
                    <span>{ing.name}</span>
                  </div>
                ),
              }))}
              onChange={setSelectedIngredients}
              value={selectedIngredients}
              className="font-adventure"
              placeholder="Select ingredients"
              styles={selectStyles}
              required
            />
          </motion.div>
          <div>
            <label htmlFor="instructions" className={labelStyle}>
              <FileText className="mr-2" /> Instructions
            </label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className={`${inputStyle} h-32`}
              required
              placeholder="Enter recipe instructions"
            />
          </div>
          <div className="flex space-x-4 pt-4">
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-1/2 bg-[#456D1E] text-white py-3 rounded-lg hover:bg-[#84B850] transition-colors duration-300 font-adventure font-bold text-lg shadow-md"
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-1/2 bg-[#84B850] text-white py-3 rounded-lg hover:bg-[#456D1E] transition-colors duration-300 font-adventure font-bold text-lg shadow-md"
            >
              Chart Recipe
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
