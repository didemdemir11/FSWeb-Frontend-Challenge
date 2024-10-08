import React from "react";

const Projects = () => {
  return (
    <>
      <div className="bg-customGreen">
        <section className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60">
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-12 text-customPurple">
            Projects
          </h2>
          <div className="bg-white rounded-[12px]">
            <div>
              <img src="/images/projects-img-1.png" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-customPurple">
                Workintech
              </h3>
              <p className="text-[#383838]">
                A simple, customizable, minimal setup cookie plugin that allows
                your users to select which cookies to accept or decline. This
                was created with vanilla JS, SCSS and Parcel Bundler and is
                available as a NPM package and the git repository makes any type
                of customization to code and themes possible.
              </p>
              <div>
                <button className="bg-customPurple text-white rounded px-4">
                  react
                </button>
                <button className="bg-customPurple text-white rounded px-4">
                  redux
                </button>
                <button className="bg-customPurple text-white rounded px-4">
                  vercel
                </button>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/didem-demir-a37917116/"
                  className="text-black font-bold underline"
                >
                  View Site
                </a>
                <a
                  href="https://www.linkedin.com/in/didem-demir-a37917116/"
                  className="text-black font-bold underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white  mt-8 rounded-[12px]">
            <div>
              <img src="/images/projects-img-2.png" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-customPurple">Journey</h3>
              <p className="text-[#383838]">
                A simple, customizable, minimal setup cookie plugin that allows
                your users to select which cookies to accept or decline. This
                was created with vanilla JS, SCSS and Parcel Bundler and is
                available as a NPM package and the git repository makes any type
                of customization to code and themes possible.
              </p>
            </div>
            <div>
              <button className="bg-customPurple text-white rounded px-4">
                react
              </button>
              <button className="bg-customPurple text-white rounded px-4">
                redux
              </button>
              <button className="bg-customPurple text-white rounded px-4">
                vercel
              </button>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/didem-demir-a37917116/"
                className="text-black font-bold underline"
              >
                View Site
              </a>
              <a
                href="https://www.linkedin.com/in/didem-demir-a37917116/"
                className="text-black font-bold underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Projects;
