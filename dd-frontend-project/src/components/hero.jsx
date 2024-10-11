import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { DarkModeContext } from "../contexts/DarkModeContext";

const Hero = () => {
  const { languageData, toggleLanguage } = useContext(LanguageContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const lightGradient = "linear-gradient(to right, #4731D3 75%, #CBF281 25%)";
  const darkGradient = "linear-gradient(to right, #171043 75%, #1A210B 25%)";
  return (
    <section
      className="hero content w-full h-full dark:bg-customBlack"
      style={{
        background: darkMode ? darkGradient : lightGradient,
      }}
    >
      <div className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60">
        <header className="flex justify-between items-center relative">
          <h1 className="text-2xl md:text-3xl font-bold text-customGreen self-center ">
            {languageData.hero.header.name}
          </h1>
          <div className="flex space-x-4 self-start">
            <button
              className="text-customGreen dark:text-[#BAB2E7] font-bold"
              onClick={toggleLanguage}
            >
              {languageData.hero.buttons.language_switch}
            </button>
            <div>
              <button data-cy="dark-mode-toggle" onClick={toggleDarkMode}>
                <div className="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-[#8F88FF] dark:bg-[#3A3A3A] flex items-center">
                  <div
                    className={`h-4 w-4 rounded-full bg-[#FFE86E] shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out transform ${
                      darkMode ? "translate-x-4" : ""
                    }`}
                  ></div>
                </div>
              </button>
              <span className="text-customPurple dark:text-[#D9D9D9] ml-1 font-bold">
                {darkMode
                  ? languageData.hero.buttons.light_mode
                  : languageData.hero.buttons.dark_mode}
              </span>
            </div>
          </div>
        </header>
        <main className="flex flex-col lg:flex-row justify-between items-center mt-8">
          <div className="flex flex-col items-start">
            <h1 className="mb-4 text-customGreen font-bold text-5xl">
              {languageData.hero.content.title}
            </h1>
            <p className="mb-4 text-white font-normal">
              {languageData.hero.content.description}
            </p>

            <div className="links flex space-x-4">
              <a
                href={languageData.hero.links.github}
                className="flex items-center justify-center space-x-2 p-2 rounded-[6px] bg-white hover:bg-gray-100  dark:bg-customBlack text-customPurple dark:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/github.png"
                  alt="GitHub"
                  className="w-5 h-5 "
                />
                <span className="font-bold">GitHub</span>
              </a>
              <a
                href={languageData.hero.links.linkedin}
                className="flex items-center justify-center space-x-2 p-2 rounded-[6px] bg-white hover:bg-gray-100 dark:bg-customBlack text-customPurple dark:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  className="w-5 h-5 text-customPurple"
                />
                <span className="font-bold">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center mx-auto- max-w-[350px] md:max-h-[350px]">
            <img
              src={languageData.hero.images.hero_image}
              className="w-full h-auto object-cover rounded-[18px]"
            />
          </div>
        </main>
      </div>
    </section>
  );
};
export default Hero;
