/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        adventure: ["YourAdventureFont", "sans-serif"],
      },
      colors: {
        "map-blue": "#bae6fd", // Light blue from the map
        "map-green": "#86efac", // Light green from the map
        "map-dark": "#1e293b", // Dark color for text
        "map-accent": "#f97316", // Orange accent color
        "map-accent-dark": "#ea580c", // Darker shade of the accent for hover states
        parchment: "#f3e5ab",
        "old-paper": "#d0c8b0",
        brown: {
          600: "#8B4513",
          700: "#704214",
          800: "#553311",
        },
      },
      backgroundColor: {
        "old-paper": "#d0c8b0",
      },
    },
  },
  plugins: [],
};
