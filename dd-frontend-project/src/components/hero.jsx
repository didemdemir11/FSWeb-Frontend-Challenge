import React from "react";
import GitHubButton from "react-github-btn";

const Hero = () => {
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
            didem
          </h1>
          <div className="flex space-x-4 self-start">
            <button className="text-customGreen font-bold ">
              TÜRKÇE'YE GEÇ
            </button>
            <div>
              <button>
                <div className="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-[#8F88FF] flex items-center">
                  <div className="h-4 w-4 rounded-full bg-[#FFE86E] shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4"></div>
                </div>
              </button>
              <span className="text-customPurple font-bold">DARK MODE</span>
            </div>
          </div>
        </header>
        <main className="flex flex-col lg:flex-row justify-between items-center mt-8">
          <div className="flex flex-col items-start">
            <h1 className="mb-4 text-customGreen font-bold text-5xl">
              I am a Frontend Developer...
            </h1>
            <p className="mb-4 text-white font-normal">
              ...who likes to craft solid and scalable frontend products with
              great user experiences.
            </p>

            <div className="links flex space-x-4">
              <GitHubButton
                href="https://github.com/didemdemir11"
                data-color-scheme="no-preference: light; light: dark; dark: light;"
                data-size="large"
                aria-label="Follow @buttons on GitHub"
              >
                Github
              </GitHubButton>
              <a
                href="https://www.linkedin.com/in/didem-demir-a37917116/"
                className="text-white font-bold"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center mx-auto- max-w-[350px] md:max-h-[350px]">
            <img
              src="https://bit.ly/4dxOncn"
              className="w-full h-auto object-cover rounded-[18px]"
            />
          </div>
        </main>
      </div>
    </section>
  );
};
export default Hero;
