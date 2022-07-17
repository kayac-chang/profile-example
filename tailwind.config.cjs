/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "h-lg": ["56px", "70px"],
        "h-md": ["40px", "51px"],
        "h-sm": ["32px", "40px"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        "galactic-blue": "#755CDE",
        "summer-yellow": "#F6A560",
        pink: "#F39E9E",
        "light-red": "#EB7565",
        cyan: "#61C4B7",
        "dark-purple": "#552049",
        black: "#030303",
        "medium-brown": "#7A746E",
        "light-cream": "#FFF7F0",
      },
    },
  },
  plugins: [],
};
