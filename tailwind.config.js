/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        bigTablet: "820px",
      },
      colors: {
        primary: "#FFA633",
        secondary: "#201F1D",
        black: "#676767",
      },
    },
  },
  plugins: [],
};
