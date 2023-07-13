import React from "react";

const Header = () => {
  return (
    <div className="header bg-[#043d5d] justify-between flex items-center rounded shadow padding p-5">
      <div className="logo text-white w-1/4 items-center">
        <img className=""
          src="https://pbs.twimg.com/profile_images/1012281639953629185/xTmSYT09_400x400.jpg"
          alt=""
        />
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
