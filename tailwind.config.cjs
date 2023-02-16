/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "light-bg": "url('/new white backdrop.jpeg')",
        "dark-bg": "url('/black background new.jpeg')",
      },
      fontFamily: {
        inter: ["inter", "serif"],
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
