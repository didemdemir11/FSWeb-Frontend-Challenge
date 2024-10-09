import React from "react";

const Profile = ({ data }) => {
  return (
    <>
      <div className="bg-customPurple dark:bg-customPurpleDark">
        <section className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60">
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-12 text-customGreen">
            {data.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col justify between space-y-6 flex-1 ">
              <h3 className="text-3xl font-medium text-white mb-4">
                {data.basic_info_title}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-lg text-customGreen">
                    {data.details.birth_date}
                  </h4>
                  <p className="text-white">{data.details.birth_date_value}</p>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-medium text-lg text-customGreen">
                    {data.details.residence}
                  </h4>
                  <p className="text-white">{data.details.residence_value}</p>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-medium text-lg text-customGreen">
                    {data.details.education}
                  </h4>
                  <p className="text-white">{data.details.education_value}</p>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-medium text-lg text-customGreen">
                    {data.details.roles}
                  </h4>
                  <p className="text-white">{data.details.roles_value}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-1">
              <img
                src={data.images.profile_image}
                className="w-full h-full object-cover rounded-[10px] shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-between space-y-4 flex-1">
              <h3 className="text-3xl font-medium text-white mb-4">
                {data.about_me.title}
              </h3>
              <p className="text-white">{data.about_me.text_1}</p>
              <p className="text-white">{data.about_me.text_2}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Profile;
