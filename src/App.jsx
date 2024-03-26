import { useState } from "react";
import "./App.css";
import ProfileInfo from "./components/ProfileInfo";
import OverView from "./components/OverView";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-bgColor w-full h-full">
      <div className="w-full flex  sm:flex-row flex-col text-white">
        {/* Profile Info left side */}
        <div className="static sm:fixed top-0 -left-0 w-full sm:w-[40%] h-full">
          <ProfileInfo />
        </div>
        {/* Right Side */}
        <div className="ml-0 sm:ml-[39rem] w-full sm:w-[70%] overflow-hidden">
          <OverView />
          <Projects/>
        </div>
      </div>
    </div>
  );
}

export default App;
