import React from "react";

const Hero = () => {
  return (
    <section
      className="hero content"
      style={{
        background: "linear-gradient(to right, #4731D3 70%, #CBF281 30%)",
      }}
    >
      <div className="px-60">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold ">didem</h1>
          <div className="flex space-x-4">
            <button>TÜRKÇE'YE GEÇ</button>
            <div>
              <button>
                <div className="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-[#8F88FF] ring-black/20 flex items-center">
                  <div className="h-4 w-4 rounded-full bg-[#FFE86E] shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4"></div>
                </div>
              </button>
              <span>Dark Mode</span>
            </div>
          </div>
        </header>
        <main className="flex justify-between items-center mt-8">
          <div className="flex flex-col items-start">
            <h1 className="mb-4">I am a Frontend Developer...</h1>
            <p className="mb-4">
              ...who likes to craft solid and scalable frontend products with
              great user experiences.
            </p>

            <div className="links flex space-x-4">
              <a href="https://github.com/didemdemir11">GitHub</a>
              <a href="https://www.linkedin.com/in/didem-demir-a37917116/">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center mx-auto- max-w-[350px] max-h-[350px]">
            <img
              src="https://bit.ly/4dxOncn"
              className="w-full h-full object-cover rounded-[18px]"
            />
          </div>
        </main>
      </div>
    </section>
  );
};
export default Hero;
