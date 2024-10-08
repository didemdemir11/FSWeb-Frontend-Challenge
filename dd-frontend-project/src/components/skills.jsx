import React from "react";
const Skills = () => {
  return (
    <section className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60">
      <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-12 text-customPurple">
        Skills
      </h2>
      <div className="flex flex-wrap justify-end mt-[100px]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <li className="flex items-center space-x-4">
            <img
              src="/logos/jslogo.jpeg"
              alt="JavaScript Logo"
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
            />
            <span>JAVASCRIPT</span>
          </li>
          <li className="flex items-center space-x-4">
            <img
              src="/logos/react-logo.png"
              alt=""
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
            />
            <span>REACT</span>
          </li>
          <li className="flex items-center space-x-4">
            <img
              src="/logos/reduxlogo.png"
              alt=""
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
            />
            <span>REDUX</span>
          </li>
          <li className="flex items-center space-x-4">
            <img
              src="/logos/node-logo.jpeg"
              alt=""
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
            />
            <span>NODE</span>
          </li>
          <li className="flex items-center space-x-4">
            <img
              src="/logos/vscode-logo.png"
              alt=""
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
            />
            <span>VS CODE</span>
          </li>
          <li className="flex items-center space-x-4">
            <img
              src="/logos/figma-logo.jpeg"
              alt=""
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
            />
            <span>FIGMA</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Skills;
