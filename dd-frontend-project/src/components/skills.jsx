import React from "react";
const Skills = () => {
  return (
    <section className="pb-[100px] px-6 md:px-8 lg:px-60">
      <div className="flex justify-between mt-[100px]">
        <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-12 text-customPurple mr-20 ">
          Skills
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-y-8 flex-grow">
          <li className="flex items-center space-x-4">
            <img
              src="/logos/jslogo.jpeg"
              alt="JavaScript Logo"
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[6px] shadow-lg"
            />
            <span className="text-[#777777] font-medium">JAVASCRIPT</span>
          </li>
          <li className="flex items-center space-x-4">
            <img
              src="/logos/node-logo.jpeg"
              alt="Node logo"
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[6px] shadow-lg"
            />
            <span className="text-[#777777] font-medium">NODE</span>
          </li>
          <li className="flex items-center space-x-4">
            <img
              src="/logos/react-logo.png"
              alt="React Logo"
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[6px] shadow-lg"
            />
            <span className="text-[#777777] font-medium">REACT</span>
          </li>
          <li className="flex items-center space-x-4">
            <img
              src="/logos/vscode-logo.png"
              alt="Vs Code Logo"
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[6px] shadow-lg"
            />
            <span className="text-[#777777] font-medium">VS CODE</span>
          </li>
          <li className="flex items-center space-x-4">
            <img
              src="/logos/reduxlogo.png"
              alt="REDUX Logo"
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[6px] shadow-lg"
            />
            <span className="text-[#777777] font-medium">REDUX</span>
          </li>

          <li className="flex items-center space-x-4">
            <img
              src="/logos/figma-logo.jpeg"
              alt="Figma Logo"
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-[6px] shadow-lg"
            />
            <span className="text-[#777777] font-medium">FIGMA</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Skills;
