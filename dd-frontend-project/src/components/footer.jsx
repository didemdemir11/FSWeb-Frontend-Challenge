import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Footer = () => {
  const { languageData } = useContext(LanguageContext);
  return (
    <footer className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60 bg-customWhite dark:bg-customBlack">
      <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-12 text-customPurple dark:text-[#8F88FF]  text-center">
        {languageData.footer.title}
      </h2>
      <p className="text-[#120B39] dark:text-white text-center text-xl">
        {languageData.footer.description}
      </p>
      <p className="text-customPurple dark:text-[#8F88FF] text-center underline">
        {languageData.footer.email}
      </p>
      <div className="flex justify-center space-x-6 mt-6">
        {languageData.footer.icons.map((icon, index) => (
          <a
            key={index}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-200 hover:scale-90"
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-9 h-9 object-contain"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
