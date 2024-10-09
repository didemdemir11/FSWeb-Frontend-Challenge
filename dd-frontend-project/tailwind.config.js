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
        customWhite: "#F9F9F9",
        customPurpleDark: "#171043",
        customGreenDark: "#1A210B",
        customPurpleDarkHeading: "#C1BAED" /*project sayfası başlıklar*/,
        customPurpleDarkButton: "#8173DA" /*project sayfası butonlar*/,
      },
    },
  },
  plugins: [],
};
