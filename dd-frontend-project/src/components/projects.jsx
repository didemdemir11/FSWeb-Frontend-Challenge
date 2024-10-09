import React from "react";

const Projects = ({ data }) => {
  return (
    <>
      <div className="bg-customGreen dark:bg-customGreenDark">
        <section className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60">
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-12 text-customPurple dark:text-customGreen">
            {data.title}
          </h2>
          {data.list.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#2B2727] rounded-[18px] flex flex-col md:flex-row items-stretch mb-4 "
            >
              <div className="flex justify-center items-center mx-auto max-w-[360px] md:max-h-[360px]">
                <img
                  src={project.image}
                  className="w-full h-full object-cover rounded-t-[18px]  md:rounded-l-[18px] md:rounded-r-none"
                />
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-2xl font-bold text-customPurple dark:text-customPurpleDarkHeading">
                  {project.project_name}
                </h3>
                <p className="text-[#383838] dark:text-white mt-4">
                  {project.description}
                </p>
                <div className="mt-4 space-x-2">
                  {project.technologies.map((tech, index) => (
                    <button
                      key={index}
                      className="bg-customPurple dark:bg-customPurpleDarkButton text-white rounded px-4"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
                <div className="mt-4 space-x-2">
                  <a
                    href={project.links.view_site}
                    className="text-black dark:text-customGreen font-bold underline"
                  >
                    View Site
                  </a>
                  <a
                    href={project.links.github}
                    className="text-black dark:text-customGreen font-bold underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
export default Projects;
