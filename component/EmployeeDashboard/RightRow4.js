import React from "react";
import Styles from "../../styles/EmpDashboard.module.css";

const RightRow4 = () => {
  return (
    <>
      <div className={`${Styles.contain}`}>
        <h5 className={Styles.heading_right}>UPCOMING HOLIDAY</h5>
        <div className={`${Styles.right_content1}`}>
          <div className={`${Styles.right_content1_upper}`}>
            <div
              className={`${Styles.right_content1_upper_left} right_content1_upper_left`}
            >
              <h5>Mon 20 May 2019 - Ramzan</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightRow4;
