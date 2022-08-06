import React from "react";
import Styles from "../../styles/EmpDashboard.module.css";

const RightRow1 = () => {
  return (
    <>
      <div className={`${Styles.contain}`}>
        <h5 className={Styles.heading_right}>PROJECTS</h5>
        <div className={`${Styles.right_content1}`}>
          <div className={`${Styles.right_content1_upper}`}>
            <div
              className={`${Styles.right_content1_upper_left} right_content1_upper_left`}
            >
              <h5>71</h5>
              <p>TOTAL TASKS</p>
            </div>
            <div className={`${Styles.partition}`}></div>
            <div
              className={`${Styles.right_content1_upper_right} right_content1_upper_right`}
            >
              <h5>14</h5>
              <p>PENDING TASKS</p>
            </div>
          </div>
          <div
            className={`${Styles.right_content1_bottom} right_content1_bottom`}
          >
            <div>
              <h5>2</h5>
              <p>TOTAL PROJECTS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightRow1;
