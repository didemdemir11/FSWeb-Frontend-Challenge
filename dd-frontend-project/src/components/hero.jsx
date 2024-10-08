import React, { useContext } from "react";
import GitHubButton from "react-github-btn";
import { LanguageContext } from "../contexts/LanguageContext";

const Hero = ({ data }) => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <section
      className="hero content w-full h-full"
      style={{
        background: "linear-gradient(to right, #4731D3 75%, #CBF281 25%)",
      }}
    >
      <div className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60">
        <header className="flex justify-between items-center relative">
          <h1 className="text-2xl md:text-3xl font-bold text-customGreen self-center ">
            {data.header.name}
          </h1>
          <div className="flex space-x-4 self-start">
            <button
              className="text-customGreen font-bold"
              onClick={toggleLanguage}
            >
              {language === "tr"
                ? data.buttons.language_switch_eng
                : data.buttons.language_switch_tr}
            </button>
            <div>
              <button>
                <div className="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-[#8F88FF] flex items-center">
                  <div className="h-4 w-4 rounded-full bg-[#FFE86E] shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4"></div>
                </div>
              </button>
              <span className="text-customPurple font-bold">
                {data.buttons.dark_mode}
              </span>
            </div>
          </div>
        </header>
        <main className="flex flex-col lg:flex-row justify-between items-center mt-8">
          <div className="flex flex-col items-start">
            <h1 className="mb-4 text-customGreen font-bold text-5xl">
              {language === "tr"
                ? data.content.title_tr
                : data.content.title_eng}
            </h1>
            <p className="mb-4 text-white font-normal">
              {language === "tr"
                ? data.content.description_tr
                : data.content.description_eng}
            </p>

            <div className="links flex space-x-4">
              <GitHubButton
                href={data.links.github}
                data-color-scheme="no-preference: light; light: dark; dark: light;"
                data-size="large"
                aria-label="Follow @buttons on GitHub"
              >
                Github
              </GitHubButton>
              <a href={data.links.linkedin} className="text-white font-bold">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center mx-auto- max-w-[350px] md:max-h-[350px]">
            <img
              src={data.images.hero_image}
              className="w-full h-auto object-cover rounded-[18px]"
            />
          </div>
        </main>
      </div>
    </section>
  );
};
export default Hero;
