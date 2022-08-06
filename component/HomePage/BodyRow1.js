import React from "react";
import Styles from "../../styles/Body.module.css";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import CurrencyPoundOutlinedIcon from "@mui/icons-material/CurrencyPoundOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Card } from "antd";
const { Meta } = Card;

const BodyRow1 = () => {
  return (
    <>
      <div className={Styles.contain}>
        <h2 className="body-h2">Welcome Admin!</h2>
        <h6 className="body-h6">Dashboard</h6>
      </div>
      <div className={` ${Styles.body_cards}`}>
        <Card>
          <Meta 
            avatar={<WidgetsOutlinedIcon />}
            title="112"
            description="Projects"
            className="card-content"
          />
        </Card>
        <Card>
          <Meta
            avatar={<CurrencyPoundOutlinedIcon />}
            title="44"
            description="Clients"
            className="card-content"
          />
        </Card>
        <Card>
          <Meta
            avatar={<DiamondOutlinedIcon />}
            title="37"
            description="Tasks"
            className="card-content"
          />
        </Card>
        <Card>
          <Meta
            avatar={<PersonOutlineOutlinedIcon />}
            title="218"
            description="Employees"
            className="card-content"
          />
        </Card>
      </div>
    </>
  );
};

export default BodyRow1;
