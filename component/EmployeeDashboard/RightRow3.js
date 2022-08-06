import React from "react";
import Styles from "../../styles/EmpDashboard.module.css";

const RightRow3 = () => {
  return (
    <>
      <div className={`${Styles.contain}`}>
        <h5 className={Styles.heading_right}>YOUR TIME OFF ALLOWANCE</h5>
        <div className={`${Styles.right_content1}`}>
          <div className={`${Styles.right_content1_upper}`}>
            <div
              className={`${Styles.right_content1_upper_left} right_content1_upper_left`}
            >
              <h5>5.0 Hours</h5>
              <p>APPROVED</p>
            </div>
            <div className={`${Styles.partition}`}></div>
            <div
              className={`${Styles.right_content1_upper_right} right_content1_upper_right`}
            >
              <h5>15 Hours</h5>
              <p>REMAINING</p>
            </div>
          </div>
          <div
            className={`${Styles.right_content1_bottom} right_content1_bottom`}
          >
            <div className={`${Styles.apply_button}`}>
              <button>Apply Time Off</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightRow3;
