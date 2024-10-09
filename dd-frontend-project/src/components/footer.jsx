import React from "react";

const Footer = ({ data }) => {
  return (
    <footer className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60">
      <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-12 text-customPurple text-center">
        {data.title}
      </h2>
      <p className="text-[#120B39] text-center">{data.description}</p>
      <p className="text-[#120B39] text-center underline">{data.email}</p>
      <div className="text-[#120B39] text-center ">{data.icons}</div>
    </footer>
  );
};
export default Footer;
