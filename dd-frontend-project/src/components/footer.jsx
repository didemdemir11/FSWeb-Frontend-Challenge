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
      <div className="text-customPurple dark:text-[#8F88FF] text-center ">
        {languageData.footer.icons}
      </div>
    </footer>
  );
};
export default Footer;
