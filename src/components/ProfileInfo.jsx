import React from "react";
import avatar from "../assets/Avatar.png";

function ProfileInfo() {
  return (
    <div className="w-full py-20 pl-28 flex flex-col gap-5 justify-center">
      {/* Avatar */}
      <figure className="flex items-center justify-center w-[11rem] h-[11rem] p-1 rounded-full bg-primaryColor border-[1px] border-secondColor overflow-hidden">
        <img src={avatar} alt="Yasin Ahmed" className="w-[11rem] "/>
      </figure>
      {/* Info */}
      <div className="flex flex-col gap-3">
        <h2 className="text-[44px] font-bold">Yasin <span className="text-secondColor">Ahmed</span></h2>
        <span className="text-[20px] whitespace-normal">Hi! I'm a <span className="text-secondColor">MERN</span> Stack Developer from Mogadishu, <span className="text-secondColor">Somalia</span>.</span>
        <span className="text-[20px] whitespace-normal">
          I build websites and software. I'm working on my business, <span className="text-secondColor">Amesa </span>
           Solutions, along with my friends. We create all sorts of software and
          websites.
        </span>
        <span className="text-[20px] whitespace-normal">Let's <span className="text-secondColor">build</span> something amazing together!</span>
      </div>
    </div>
  );
}

export default ProfileInfo;
