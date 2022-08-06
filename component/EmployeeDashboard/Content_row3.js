import React from "react";
import Styles from "../../styles/EmpDashboard.module.css";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Avatar } from "antd";

const Content_row3 = () => {
  return (
    <>
      <div className={`${Styles.contain}`}>
        <div className={` content_heading`}>
          <h5>NEXT SEVEN DAYS</h5>
        </div>
        <div className={`${Styles.row1_content1}`}>
            <div className={`${Styles.content1_left} content1_left`}>
            <BusinessCenterOutlinedIcon className={` marginRight `}/>
            <h5 className={` contentSet`} >2 People are going to be away</h5>
            </div>
            <Avatar className={`avatarBorder`} src="https://joeschmoe.io/api/v1/random" />
        </div>
        <div className={`${Styles.row1_content1}`}>
            <div className={`${Styles.content1_left} content1_left`}>
            <PersonAddAltOutlinedIcon className={` marginRight `}/>
            <h5 className={` contentSet`} >Your first day is going to be on Thursday</h5>
            </div>
            <Avatar className={`avatarBorder`} src="https://joeschmoe.io/api/v1/random" />
        </div>
        <div className={`${Styles.row1_content1}`}>
            <div className={`${Styles.content1_left} content1_left`}>
            <CalendarMonthOutlinedIcon className={` marginRight `}/>
            <h5 className={` contentSet`} >It's Spring Bank Holiday on Monday</h5>
            </div>
        </div>
      </div>
    </>
  );
};

export default Content_row3;
