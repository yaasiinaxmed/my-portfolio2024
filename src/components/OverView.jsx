import React from "react";
import Gits from "../assets/gits.svg";
import X from "../assets/X.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import Amesa from "../assets/Amesa.jpg";
import Q from "../assets/Q.svg";

export default function OverView() {
  return (
    <div className="w-full pl-[7rem] pr-[3rem] py-20 grid  grid-cols-4 grid-rows-6 gap-4">
      {/* X / Twitter - Section */}
      <div className="col-span-2 row-span-2 w-full h-[186px] card border border-gray-500 flex flex-col gap-3">
        {/* header */}
        <div className="relative flex justify-between">
          <img
            src={X}
            alt="Yasin Ahmed"
            oncontextmenu="return false;"
            className="pointer-events-none"
          />

          <button className="absolute top-1 right-0  bg-white rounded-full text-bgColor px-6 py-2 text-[14px]">
            Follow
          </button>
        </div>
        {/* content */}
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium ">Twitter</h3>
          <span className="text-sm font-normal text-gray-300">
            @yaasiinahmed12
          </span>
          <p className="text-sm font-normal text-gray-200">
            I am Web Developer
          </p>
        </div>
      </div>
      {/* Github - Section */}
      <div className="col-span-2 row-span-4 col-start-3 w-full card border border-gray-500 flex flex-col gap-3">
        {/* header */}
        <div className="relative flex justify-between">
          <img
            src={Github}
            alt="Yasin Ahmed"
            oncontextmenu="return false;"
            className="pointer-events-none"
          />

          <button className="absolute top-1 right-0  bg-white rounded-full text-bgColor px-6 py-2 text-[14px]">
            Follow
          </button>
        </div>
        {/* content */}
        <div className="flex flex-col gap-[5rem]">
          <h3 className="text-sm font-medium ">Yasin Ahmed</h3>
          <div className="flex flex-col gap-4">
            <img
              src={Gits}
              alt="Yasin Ahmed"
              oncontextmenu="return false;"
              className="pointer-events-none"
            />
            <h3 className="text-[10px] font-normal text-gray-300 ">
              10,832 contributions in the last year
            </h3>
          </div>
        </div>
      </div>
      {/* Linkedin - Section */}
      <div className="row-span-2 row-start-3 w-full h-[180px] card border border-gray-500 flex flex-col gap-3">
        {/* header */}
        <div className="relative flex justify-between">
          <img
            src={Linkedin}
            alt="Yasin Ahmed"
            oncontextmenu="return false;"
            className="pointer-events-none"
          />
        </div>
        {/* content */}
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-medium ">Linkedin</h3>
          <span className="text-sm font-normal text-gray-300">
            @yaasiinahmed12
          </span>
        </div>
      </div>
      {/* Instagram - Section */}
      <div className="row-span-2 row-start-3 w-full h-[180px] card border border-gray-500 flex flex-col gap-3">
        {/* header */}
        <div className="relative flex justify-between">
          <img
            src={Instagram}
            alt="Yasin Ahmed"
            oncontextmenu="return false;"
            className="pointer-events-none"
          />
        </div>
        {/* content */}
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-medium ">Instagram</h3>
          <span className="text-sm font-normal text-gray-300">
            @yaasiinahmed12
          </span>
        </div>
      </div>
      {/* Quotes - Section */}
      <div className="col-span-2 row-span-2 row-start-5 w-full h-[186px] card border border-gray-500 flex flex-col gap-3">
        {/* header */}
        <div className="relative flex justify-between">
          <img
            src={Q}
            alt="Quotes"
            oncontextmenu="return false;"
            className="pointer-events-none"
          />
        </div>
        {/* content */}
        <div className="flex flex-col gap-1">
          <h3 className="text-[20px] font-medium ">You cannot make progress without making decisions.”</h3>
        </div>
      </div>
      {/* Amesa - Section */}
      <div className="col-span-2 row-span-2 col-start-3 row-start-5 w-full h-[186px] card border border-gray-500 flex flex-col gap-3">
        {/* header */}
        <div className="relative flex justify-between">
          <img
            src={Amesa}
            alt="Amesa Solutions"
            oncontextmenu="return false;"
            className="pointer-events-none w-[40px] h-[40px] rounded-lg"
          />
        </div>
        {/* content */}
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium ">Amesa Solutions</h3>
          <span className="text-sm font-normal text-gray-300">
           amesasolutions.com
          </span>
        </div>
      </div>
    </div>
  );
}
