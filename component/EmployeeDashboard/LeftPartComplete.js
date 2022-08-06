import React from "react";
import Main_Head from "./MainHead";
import Content_row1 from "./Content_row1";
import Content_row2 from "./Content_row2";
import Content_row3 from "./Content_row3";

const LeftPartComplete = () => {
  return (
    <>
        
      <div className="left_content">
        <Content_row1 />
        <Content_row2 />
        <Content_row3 />
      </div>
    </>
  );
};

export default LeftPartComplete;
