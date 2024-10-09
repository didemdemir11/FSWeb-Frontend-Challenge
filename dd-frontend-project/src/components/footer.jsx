import React from "react";

const Footer = ({ data }) => {
  return (
    <footer className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60 bg-customWhite dark:bg-customBlack">
      <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-12 text-customPurple dark:text-[#8F88FF]  text-center">
        {data.title}
      </h2>
      <p className="text-[#120B39] dark:text-white text-center text-xl">
        {data.description}
      </p>
      <p className="text-customPurple dark:text-[#8F88FF] text-center underline">
        {data.email}
      </p>
      <div className="text-customPurple dark:text-[#8F88FF] text-center ">
        {data.icons}
      </div>
    </footer>
  );
};
export default Footer;
