import React from "react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const Home = () => {
  return (
    <div className="homeMj flex flex-grow bg-blue-100">
      <LeftColumn />
      <div className="border-l border-blue-950"></div>
      <RightColumn />
    </div>
  );
};

export default Home;
