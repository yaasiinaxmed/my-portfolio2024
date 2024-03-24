import { useState } from "react";
import "./App.css";
import ProfileInfo from "./components/ProfileInfo";
import OverView from "./components/OverView";

function App() {
  return (
    <div className="bg-bgColor w-full h-full">
      <div className="w-full flex text-white">
        {/* Profile Info left side */}
        <div className="w-[36%] h-full">
          <ProfileInfo />
        </div>
        {/* Right Side */}
        <div className="w-[74%] overflow-hidden">
          <OverView />
        </div>
      </div>
    </div>
  );
}

export default App;
