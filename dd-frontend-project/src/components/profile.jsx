import React from "react";

const Profile = () => {
  return (
    <>
      <div className="bg-customPurple">
        <section className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60">
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-12 text-customGreen">
            Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col justify between space-y-6 flex-1 ">
              <h3 className="text-3xl font-medium text-white mb-4">
                Basic Information
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-lg text-customGreen">
                    Birth Date
                  </h4>
                  <p className="text-white">11.09.1993</p>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-medium text-lg text-customGreen">
                    Residence
                  </h4>
                  <p className="text-white">Ankara</p>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-medium text-lg text-customGreen">
                    Education
                  </h4>
                  <p className="text-white">
                    METU BA <br />
                    Bachelor's Degree, 2017
                  </p>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-medium text-lg text-customGreen">
                    Preferable Roles
                  </h4>
                  <p className="text-white">Frontend, UI</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-1">
              <img
                src="/images/profile-img.png"
                className="w-full h-full object-cover rounded-[10px] shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-between space-y-4 flex-1">
              <h3 className="text-3xl font-medium text-white mb-4">About Me</h3>
              <p className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                aut, odit laborum aliquam voluptatum nisi mollitia.
              </p>
              <p className="text-white">
                Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
                deserunt quam temporibus cumque magnam
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Profile;
