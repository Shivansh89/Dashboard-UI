import React from "react";
import Styles from "../../styles/EmpDashboard.module.css";
import Image from "next/image";

const Main_Head = () => {
  return (
    <>
      <div className={`${Styles.head}`}>
        <Image
          src="/emp_dash_image.webp"
          width={70}
          height={70}
          className={`${Styles.head_image}`}
        ></Image>
        <div className={`${Styles.ownerName} ownerName`}>
          <h4>Welcome, John Doe</h4>
          <p>Monday, 20 May 2019</p>
        </div>
      </div>
    </>
  );
};

export default Main_Head;
