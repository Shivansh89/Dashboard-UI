import BarChart from "./Bar-Chart.tsx";
import LineChart from "./Line-Chart.tsx";
import Styles from "../../styles/Body.module.css";

import React from "react";

const BodyRow2 = () => {
  return (
    <>
      <div className={`${Styles.body_row2} ${Styles.contain}`}>
        <div className={`row2_bar`}>
          
          <BarChart />
        </div>
        <div className={`row2_line`}>
        
          <LineChart />
        </div>
      </div>
    </>
  );
};

export default BodyRow2;
