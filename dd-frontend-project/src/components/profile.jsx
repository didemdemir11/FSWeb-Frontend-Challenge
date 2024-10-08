import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Profile = ({ data }) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className="bg-customPurple">
        <section className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60">
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-12 text-customGreen">
            {language === "tr" ? data.title_tr : data.title_eng}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col justify between space-y-6 flex-1 ">
              <h3 className="text-3xl font-medium text-white mb-4">
                {language === "tr"
                  ? data.basic_info_title_tr
                  : data.basic_info_title_eng}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-lg text-customGreen">
                    {language === " tr"
                      ? data.details.birth_date_tr
                      : data.details.birth_date_eng}
                  </h4>
                  <p className="text-white">{data.details.birth_date_value}</p>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-medium text-lg text-customGreen">
                    {language === "tr"
                      ? data.details.residence_tr
                      : data.details.residence_eng}
                  </h4>
                  <p className="text-white">{data.details.residence_value}</p>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-medium text-lg text-customGreen">
                    {language === "tr"
                      ? data.details.education_tr
                      : data.details.education_eng}
                  </h4>
                  <p className="text-white">
                    {language === "tr"
                      ? data.details.education_value_tr
                      : data.details.education_value_eng}
                  </p>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-medium text-lg text-customGreen">
                    {language === "tr"
                      ? data.details.roles_tr
                      : data.details.roles_eng}
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
                {language === "tr"
                  ? data.about_me.about_title_tr
                  : data.about_me.about_title_eng}
              </h3>
              <p className="text-white">
                {language === "tr"
                  ? data.about_me.about_text_tr_1
                  : data.about_me.about_text_eng_1}
              </p>
              <p className="text-white">
                {language === "tr"
                  ? data.about_me.about_text_tr_2
                  : data.about_me.about_text_eng_2}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Profile;
