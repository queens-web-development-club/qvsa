/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "yellow": "#FFB90B",
        "black": "#2E2E30",
        "off-white": "#F2F2F2",
      },
    },
    backgroundImage: {
      "home-background": "url('/src/assets/homeBackground.png')",
      "skyline":"url('/src/assets/skyline.jpg')",
      "newyear":"url('/src/assets/newyear.jpg')",
      "citySky":"url('/src/assets/citySky.jpeg')",
      "skyline-header":"url('/src/assets/skylineHeader.jpg')"
    },
  },
  plugins: [],
});
