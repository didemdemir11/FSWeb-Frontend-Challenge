/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customPurple: "#4731D3",
        customGreen: "#CBF281",
        customBlack: "#252128",
        customLightPurple: "#8F88FF",
        customLighterPurple: "#BAB2E7",
      },
    },
  },
  plugins: [],
};
