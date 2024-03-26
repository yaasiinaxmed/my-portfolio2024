import React from "react";
import Amesa from "../assets/Amesa.jpg";
import somvault from "../assets/somvault.jpg";
import flatclod from "../assets/flatclod.png";
import GitScore from "../assets/GitScore.jpg";
import YourSelf from "../assets/YourSelf.jpg";
import real from "../assets/real.png";

function Projects() {
  return (
    <div className="container mx-auto flex flex-col gap-8 px-4 sm:px-8 pb-8 ">
      <h2 className="text-3xl font-bold">💻 Projects</h2>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {/* FlatClod - Section */}
        <a href="http://www.flatclod.com/" className="w-full sm:w-[490px] card-2 border border-gray-500 transition-all hover:!border-secondColor flex items-center gap-3">
          {/* header */}
          <div>
            <img
              src={flatclod}
              alt="Amesa Solutions"
              className="pointer-events-none w-[30px] h-[30px] rounded-lg"
            />
          </div>
          <h3 className="text-lg font-medium">FlatClod - Software</h3>
        </a>
        {/* SomVault - Section */}
        <a href="http://www.somvault.com/" className="w-full sm:w-[490px] card-2 border border-gray-500 transition-all hover:!border-secondColor flex items-center gap-3">
          {/* header */}
          <div>
            <img
              src={somvault}
              alt="Amesa Solutions"
              className="pointer-events-none w-[30px] h-[30px] rounded-lg"
            />
          </div>
          <h3 className="text-lg font-medium">SomVault - Software</h3>
        </a>
        {/* GitScore - Section */}
        <a href="https://gitscore-azure.vercel.app/" className="w-full sm:w-[490px] card-2 border border-gray-500 transition-all hover:!border-secondColor flex items-center gap-3">
          {/* header */}
          <div>
            <img
              src={GitScore}
              alt="Amesa Solutions"
              className="pointer-events-none w-[30px] h-[30px] rounded-lg"
            />
          </div>
          <h3 className="text-lg font-medium">GitScore - Web</h3>
        </a>
         {/* Real Estate - Section */}
         <a href="https://real-estate-marketplace2.vercel.app/" className="w-full sm:w-[490px] card-2 border border-gray-500 transition-all hover:!border-secondColor flex items-center gap-3">
          {/* header */}
          <div>
            <img
              src={real}
              alt="Amesa Solutions"
              className="pointer-events-none w-[30px] h-[30px] rounded-lg"
            />
          </div>
          <h3 className="text-lg font-medium">Real Estate - Web App</h3>
        </a>
         {/* YourSelf - Section */}
         <a href="https://yourselfup.netlify.app/" className="w-full sm:w-[490px] card-2 border border-gray-500 transition-all hover:!border-secondColor flex items-center gap-3">
          {/* header */}
          <div>
            <img
              src={YourSelf}
              alt="Amesa Solutions"
              className="pointer-events-none w-[30px] h-[30px] rounded-lg"
            />
          </div>
          <h3 className="text-lg font-medium">YourSelf Up - Web App</h3>
        </a>
      </div>
    </div>
  );
}

export default Projects;
