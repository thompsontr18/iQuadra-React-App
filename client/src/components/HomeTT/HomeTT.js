import React from "react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const HomeTT = () => {
  return (
    <div className="homeMj flex  bg-blue-300">
        <LeftColumn/>
        <div className="border-l border-[#043d5d]"></div>
        <RightColumn/>
    </div>
  );
};

export default HomeTT;
