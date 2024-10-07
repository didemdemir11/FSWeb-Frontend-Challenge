import React from "react";

const Hero = () => {
  return (
    <section
      className="hero content"
      style={{
        background: "linear-gradient(to right, #4731D3 70%, #CBF281 30%)",
      }}
    >
      <div className="px-8">
        <header>
          <h1 className="text-3xl font-bold underline">didem</h1>
        </header>
        <main>
          <h1>I am a Frontend Developer...</h1>
          <p>
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div className="links">
            <a href="https://github.com/didemdemir11">GitHub</a>
            <a href="https://www.linkedin.com/in/didem-demir-a37917116/">
              LinkedIn
            </a>
          </div>
        </main>
      </div>
    </section>
  );
};
export default Hero;
