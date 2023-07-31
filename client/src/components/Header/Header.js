import React from "react";
import Logo from "../../resources/iquadra.png";

const Header = () => {
  return (
    <div className="header bg-[#043d5d] justify-between flex items-center rounded shadow padding">
      <div className="logo flex-shrink-0 px-6 py-5">
        <img className="w-20 h-20 rounded-xl" src={Logo} alt="logo.png" />
      </div>
      <div className="headerTitle flex-grow text-center">
        <h1 className="font-sans font-bold text-blue-300 text-4xl">
          iQuadra Colleges Marketing Portal
        </h1>
        <p className="font-sans text-white">
          A Portal For Marketing Team To Access The Web Scrapped Data From The Database
        </p>
      </div>
    </div>
  );
};

export default Header;
