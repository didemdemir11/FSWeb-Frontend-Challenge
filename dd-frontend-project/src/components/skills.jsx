import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Skills = () => {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="bg-white dark:bg-customBlack">
      <section className="pb-[100px] pt-[100px] px-6 md:px-8 lg:px-60">
        <div className="flex flex-col lg:flex-row justify-between ">
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-12 text-customPurple mr-20 dark:text-customGreen">
            {languageData.skills.title}
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-y-8 gap-x-8 flex-grow">
            {languageData.skills.items.map((skill, index) => (
              <li key={index} className="flex items-center space-x-4">
                {skill.name === "REDUX" ? (
                  <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[6px] shadow-lg bg-[#764ABC] flex justify-center items-center">
                    <img
                      src={skill.image}
                      alt={skill.alt}
                      className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] invert"
                    />
                  </div>
                ) : (
                  <img
                    src={skill.image}
                    alt={skill.alt}
                    className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[6px] shadow-lg"
                  />
                )}
                <span className="text-[#777777] dark:text-white font-medium">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Skills;
