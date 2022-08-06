import React from "react";
import Styles from "../../styles/EmpDashboard.module.css";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { Avatar } from "antd";

const Content_row2 = () => {
  return (
    <>
      <div className={`${Styles.contain}`}>
        <div className={` content_heading`}>
          <h5>TOMORROW</h5>
        </div>
        <div className={`${Styles.row1_content1}`}>
            <div className={`${Styles.content1_left} content1_left`}>
            <BusinessCenterOutlinedIcon className={` marginRight `}/>
            <h5 className={` contentSet`} >2 People will be away tomorrow</h5>
            </div>
            <Avatar className={`avatarBorder`} src="https://joeschmoe.io/api/v1/random" />
        </div>
      </div>
    </>
  );
};

export default Content_row2;
