import React from "react";
import avatar from "../assets/Avatar.png";

function ProfileInfo() {
  return (
    <div className="w-full !px-6 sm:px-0 py-8 sm:!py-20 pl-0 sm:!pl-30 flex flex-col gap-5 justify-center">
      {/* Avatar */}
      <figure className="flex items-center justify-center w-[11rem] h-[11rem] p-1 rounded-full bg-primaryColor border-[1px] border-secondColor overflow-hidden">
        <img src={avatar} alt="Yasin Ahmed" className="w-[11rem] "/>
      </figure>
      {/* Info */}
      <div className="flex flex-col gap-3">
        <h2 className="text-[26px] sm:text-[44px] font-bold">Yasin <span className="text-secondColor">Ahmed</span></h2>
        <span className="text-[16px] sm:text-[20px] whitespace-normal">Hi! I'm a MERN Stack Developer from Mogadishu, Somalia.</span>
        <span className="text-[16px] sm:text-[20px] whitespace-normal">
          I build websites and software. I'm working on my business, Amesa 
           Solutions, along with my friends.<br className="hidden sm:block"/> We create all sorts of software and
          websites.
        </span>
        <span className="text-[16px] sm:text-[20px] whitespace-normal">Let's build something amazing together!</span>
      </div>
    </div>
  );
}

export default ProfileInfo;
