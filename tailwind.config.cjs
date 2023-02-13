/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "light-bg": "url('../public/assets/background.jpeg')",
        "dark-bg": "url('../public/assets/black-bg.jpeg')",
      },
      fontFamily: {
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [],
};
