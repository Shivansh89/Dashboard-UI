import React from "react";
import "antd/dist/antd.css";
import Styles from "../../styles/Body.module.css";
import { Progress } from "antd";

import { Card } from "antd";

const BodyRow3 = () => {
  return (
    <>
      <div className={`${Styles.contain} ${Styles.body_row3}`}>
        <Card
          className="card_content"
          bordered={false}
          style={{ width: "100%" }}
        >
          <div className={Styles.row3_card_heading}>
            <p>New Employees</p>
            <p style={{color: "green"}}>+10%</p>
          </div>
          <h5 className="row3-value">10</h5>
          <Progress percent={65} strokeColor="red" strokeWidth="5px" showInfo={false} />
          <p>Overall Employees 218</p>
        </Card>
        <Card
          className="card_content"
          bordered={false}
          style={{ width: "100%", 'borderLeft': "0.5px solid #e2e2e2" }}
        >
          <div className={Styles.row3_card_heading}>
            <p>Earnings</p>
            <p style={{color: "green"}}>+12.5%</p>
          </div>
          <h5 className="row3-value">$1,42,300</h5>
          <Progress percent={65} strokeColor="red" strokeWidth="5px" showInfo={false} />

          <p>Previous Month $1,15,852</p>
        </Card>
        <Card
          className="card_content"
          bordered={false}
          style={{ width: "100%", 'borderLeft': "0.5px solid #e2e2e2" }}
        >
          <div className={Styles.row3_card_heading}>
            <p>Expenses</p>
            <p style={{color: "red"}}>-2.8%</p>
          </div>
          <h5 className="row3-value">$8,500</h5>
          <Progress percent={65} strokeColor="red" strokeWidth="5px" showInfo={false} />

          <p>Previous Month $7500</p>
        </Card>
        <Card
          className="card_content"
          bordered={false}
          style={{ width: "100%", 'borderLeft': "0.5px solid #e2e2e2" }}
        >
          <div className={Styles.row3_card_heading}>
            <p>Profit</p>
            <p style={{color: "red"}}>-75%</p>
          </div>
          <h5 className="row3-value">$1,12,000</h5>
          <Progress percent={65} strokeColor="red" strokeWidth="5px" showInfo={false} />

          <p>Previous Month $1,42,000</p>
        </Card>
      </div>
    </>
  );
};

export default BodyRow3;
