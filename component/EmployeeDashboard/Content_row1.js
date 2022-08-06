import React from "react";
import Styles from "../../styles/EmpDashboard.module.css";
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import { Avatar } from "antd";

const Content_row1 = () => {
  return (
    <>
      <div className={`${Styles.contain}`}>
        <div className={` content_heading`}>
          <h5>TODAY</h5>
        </div>
        <div className={`${Styles.row1_content1}`}>
            <div className={`${Styles.content1_left} content1_left`}>
            <HourglassEmptyRoundedIcon className={`colorRed marginRight `}/>
            <h5 className={`colorRed contentSet`} >Richard Miles is off sick today</h5>
            </div>
            <Avatar className={`avatarBorder`} src="https://joeschmoe.io/api/v1/random" />
        </div>
        <div className={`${Styles.row1_content1}`}>
            <div className={`${Styles.content1_left} content1_left`}>
            <BusinessCenterOutlinedIcon className={`marginRight `}/>
            <h5 className={`contentSet`} >You are away today</h5>
            </div>
            <Avatar className={`avatarBorder`} src="https://joeschmoe.io/api/v1/random" />
        </div>
        <div className={`${Styles.row1_content1}`}>
            <div className={`${Styles.content1_left} content1_left`}>
            <ApartmentOutlinedIcon className={` marginRight`}/>
            <h5 className={`contentSet`} >You are working from home today</h5>
            </div>
            <Avatar className={`avatarBorder`} src="https://joeschmoe.io/api/v1/random" />
        </div>

      </div>
    </>
  );
};

export default Content_row1;
