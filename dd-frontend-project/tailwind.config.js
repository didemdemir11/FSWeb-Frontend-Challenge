/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customPurple: "#4731D3",
        customGreen: "#CBF281",
      },
    },
  },
  plugins: [],
};
