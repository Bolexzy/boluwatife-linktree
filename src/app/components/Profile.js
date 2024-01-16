import React from "react";

const Profile = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      {/* profile pic */}
      <div className="avatar">
        <div className="w-28 lg:w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            src="/images/fotor-ai-202411633355-removebg-preview.png"
            alt="my profile image"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        {/* name */}
        <div className="text-xl md:text-2xl font-bold text-white">
          Boluwatife Emmanuel
        </div>
        {/* title */}
        <div className="text-xs sm:text-sm tracking-wide w-[350px] lg:w-[400px] xl:w-[500px] my-2 text-center font-medium text-info/75">
          I help companies from all over the world with tailor-made solutions.
          With each project, I push my work to new horizons, always putting
          quality first. 💻✨
        </div>
        {/* location */}
        <div className="flex items-center justify-center gap-1 text-xs font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p>Lagos, Nigeria</p>
        </div>
        {/* social media */}
        <div className="flex items-center justify-center space-x-4"></div>
      </div>
    </div>
  );
};

export default Profile;
