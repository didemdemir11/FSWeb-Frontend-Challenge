import React from "react";

const Projects = () => {
  return (
    <>
      <div className="bg-customGreen">
        <section className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60">
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-12 text-customPurple">
            Projects
          </h2>
          <h3>Workintech</h3>
          <p>
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
        </section>
        <section className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60">
          <h3>Journey</h3>
          <p>
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
        </section>
      </div>
    </>
  );
};
export default Projects;
