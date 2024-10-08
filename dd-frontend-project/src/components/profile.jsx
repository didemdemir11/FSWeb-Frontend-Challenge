import React from "react";

const Profile = () => {
  return (
    <>
      <div className="bg-customPurple">
        <section className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60">
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold mb-12 text-customGreen">
            Profile
          </h2>
          <p>Basic Information</p>
        </section>
        <section className="pt-[100px] pb-[100px] px-6 md:px-8 lg:px-60">
          <h2>Profile</h2>
          <p>About Me</p>
        </section>
      </div>
    </>
  );
};
export default Profile;
