import React from "react";
import Logo from "../../resources/iquadra.png";

const Header = () => {
  return (
    <div className="header bg-[#043d5d] justify-between flex items-center rounded shadow padding p-10">
      <div className="logo text-white w-1/4 p-10">
        <img className="rounded-3xl h-{20}" src={Logo} alt="logo.png" />
      </div>
      <div className="headerTitle w-3/4 text-center">
        <h1 className="font-sans font-bold text-blue-300 text-4xl">
          iQuadra Marketing
        </h1>
        <p className="font-sans text-white">
          A Portal For Marketing Team To Access Web Scrapped Data
        </p>
      </div>
    </div>
  );
};

export default Header;
