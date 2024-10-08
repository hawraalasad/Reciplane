import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRecipe } from "../api/recipes";
import Select from "react-select";
import countryList from "../data/countries";
import ingredients from "../data/ingredients";
import { MapPin, Compass, FileText, Anchor, X, Image } from "react-feather";
import continents from "../data/continents";
const AddRecipe = ({ show, onClose, username, isLoggedIn }) => {
  const [title, setTitle] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const queryClient = useQueryClient();

  const createRecipeMutation = useMutation({
    mutationFn: createRecipe,
    onSuccess: () => {
      queryClient.invalidateQueries("recipes");
      onClose();
    },
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#37B0E6] rounded-lg shadow-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1A4D1A] hover:text-[#84B850]"
        >
          <X size={24} />
        </button>
        <h2 className="text-3xl text-[#1A4D1A] font-adventure mb-6 flex items-center">
          <Anchor className="mr-2 text-[#1A4D1A]" /> Chart a New Recipe
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className=" text-[#1A4D1A] text-lg font-adventure mb-2 flex items-center"
            >
              <FileText className="mr-2" /> Recipe Name
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-white border-2 border-[#1A4D1A] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A4D1A] font-adventure text-[#1A4D1A]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="text-[#1A4D1A] text-lg font-adventure mb-2 flex items-center"
            >
              <Image className="mr-2" /> Recipe Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 bg-white border-2 border-[#1A4D1A] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A4D1A] font-adventure text-[#1A4D1A]"
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
            <label
              htmlFor="continent"
              className="text-[#1A4D1A] text-lg font-adventure mb-2 flex items-center"
            >
              <Compass className="mr-2" /> Continent
            </label>
            <Select
              options={continents}
              onChange={setSelectedContinent}
              className="font-adventure"
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "white",
                  borderColor: "#1A4D1A",
                }),
              }}
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="text-[#1A4D1A] text-lg font-adventure mb-2 flex items-center"
            >
              <MapPin className="mr-2" /> Origin
            </label>
            <Select
              options={countryList}
              onChange={setSelectedCountry}
              value={selectedCountry}
              className="font-adventure"
              filterOption={customFilter}
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "white",
                  borderColor: "#1A4D1A",
                  "&:hover": {
                    borderColor: "#84B850",
                  },
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? "#1A4D1A" : "white",
                  color: state.isSelected ? "white" : "#1A4D1A",
                  "&:hover": {
                    backgroundColor: "#84B850",
                    color: "white",
                  },
                }),
              }}
              required
            />
          </div>
          <div>
            <label
              htmlFor="ingredients"
              className="block text-[#1A4D1A] text-lg font-adventure mb-2 flex items-center"
            >
              <Compass className="mr-2" /> Ingredients
            </label>
            <Select
              isMulti
              options={ingredients.map((ing) => ({
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
              filterOption={customFilter}
              className="font-adventure"
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "white",
                  borderColor: "#1A4D1A",
                  "&:hover": {
                    borderColor: "#84B850",
                  },
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? "#1A4D1A" : "white",
                  color: state.isSelected ? "white" : "#1A4D1A",
                  "&:hover": {
                    backgroundColor: "#84B850",
                    color: "white",
                  },
                }),
                multiValue: (provided) => ({
                  ...provided,
                  backgroundColor: "#1A4D1A",
                }),
                multiValueLabel: (provided) => ({
                  ...provided,
                  color: "white",
                }),
                multiValueRemove: (provided) => ({
                  ...provided,
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#84B850",
                    color: "white",
                  },
                }),
              }}
              required
            />
          </div>
          <div>
            <label
              htmlFor="instructions"
              className="block text-[#1A4D1A] text-lg font-adventure mb-2 flex items-center"
            >
              <FileText className="mr-2" /> Instructions
            </label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full px-3 py-2 bg-white border-2 border-[#84B850] rounded-md focus:outline-none focus:ring-2 focus:ring-[#456D1E] h-32 font-adventure"
              required
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 bg-[#456D1E] text-white py-2 rounded-md hover:bg-[#84B850] transition-colors duration-300 font-adventure font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 bg-[#84B850] text-white py-2 rounded-md hover:bg-[#456D1E] transition-colors duration-300 font-adventure font-bold"
            >
              Chart Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
