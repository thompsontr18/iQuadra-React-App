import React from "react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const HomeMj = () => {
  return (
    <div className="homeMj flex  bg-blue-100">
        <LeftColumn/>
        <div className="border-l border-blue-950"></div>
        <RightColumn/>
    </div>
  );
};

export default HomeMj;
