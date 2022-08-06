import React from "react";
import "antd/dist/antd.css";
import { Card, Avatar } from "antd";
import Styles from "../../styles/Body.module.css";
import AdjustIcon from "@mui/icons-material/Adjust";
import { UserOutlined } from "@ant-design/icons";
import { Progress } from "antd";

const BodyRow4 = () => {
  return (
    <>
      <div className={`${Styles.body_row4} ${Styles.contain}`}>
        <div className={`${Styles.small_1} ${Styles.margin_right}`}>
          <Card
            title="Statistics"
            bordered={false}
            style={{ width: "100%", "fontWeight": 800 }}
          >
            <div className={Styles.row4_card_borderDiv}>
              <div className={`${Styles.row4_card_content} row4_card_content`}>
                <p>Today Leave</p>
                <p>
                  4<span>/65</span>
                </p>
              </div>
              <Progress
                percent={30}
                strokeColor="red"
                strokeWidth="5px"
                showInfo={false}
              />
            </div>
            <div className={Styles.row4_card_borderDiv}>
              <div className={`${Styles.row4_card_content} row4_card_content`}>
                <p>Pending Invoices</p>
                <p>
                  15<span>/92</span>
                </p>
              </div>
              <Progress
                percent={30}
                strokeColor="yellow"
                strokeWidth="5px"
                showInfo={false}
              />
            </div>
            <div className={Styles.row4_card_borderDiv}>
              <div className={`${Styles.row4_card_content} row4_card_content`}>
                <p>Completed Projects</p>
                <p>
                  85<span>/112</span>
                </p>
              </div>
              <Progress
                percent={60}
                strokeColor="green"
                strokeWidth="5px"
                showInfo={false}
              />
            </div>
            <div className={Styles.row4_card_borderDiv}>
              <div className={`${Styles.row4_card_content} row4_card_content`}>
                <p>Open Tickets</p>
                <p>
                  190<span>/212</span>
                </p>
              </div>
              <Progress
                percent={60}
                strokeColor="red"
                strokeWidth="5px"
                showInfo={false}
              />
            </div>
            <div className={Styles.row4_card_borderDiv}>
              <div className={`${Styles.row4_card_content} row4_card_content`}>
                <p>Closed Tickets</p>
                <p>
                  22<span>/212</span>
                </p>
              </div>
              <Progress
                percent={20}
                strokeColor="lightblue"
                strokeWidth="5px"
                showInfo={false}
              />
            </div>
          </Card>
        </div>
        <div className={Styles.small_2}>
          <Card
            title="Tasks Statistics"
            bordered={false}
            style={{ width: "100%" }}
          >
            <div className={Styles.row4_card2}>
              <div
                className={`${Styles.row4_card2_cards} ${Styles.row4_card2_cards_margin}`}
              >
                <h6>Total Tasks</h6>
                <h2>385</h2>
              </div>
              <div className={Styles.row4_card2_cards}>
                <h6>Overdue Tasks</h6>
                <h2>19</h2>
              </div>
            </div>
            <div className={`progress`}>
              <div
                className={`progress-bar`}
                role="progressbar"
                style={{ width: "28%" }}
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                30%
              </div>
              <div
                className={`progress-bar bg-success`}
                role="progressbar"
                style={{ width: "22%" }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                22%
              </div>
              <div
                className={`progress-bar bg-warning`}
                role="progressbar"
                style={{ width: "24%" }}
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                24%
              </div>
              <div
                className={`progress-bar bg-info`}
                role="progressbar"
                style={{ width: "21%" }}
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                21%
              </div>
              <div
                className={`progress-bar bg-danger`}
                role="progressbar"
                style={{ width: "10%" }}
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                10%
              </div>
            </div>
            <div className={Styles.row4_bar_content}>
              <div className={Styles.row4_content}>
                <div className={Styles.left_part}>
                  <AdjustIcon className={`text-primary`} />
                  <p>Completed Tasks</p>
                </div>
                <p>166</p>
              </div>
              <div className={Styles.row4_content}>
                <div className={Styles.left_part}>
                  <AdjustIcon className={`text-success`} />
                  <p>InProgress Tasks</p>
                </div>
                <p>115</p>
              </div>
              <div className={Styles.row4_content}>
                <div className={Styles.left_part}>
                  <AdjustIcon className={`text-warning`} />
                  <p>On Hold Tasks</p>
                </div>
                <p>31</p>
              </div>
              <div className={Styles.row4_content}>
                <div className={Styles.left_part}>
                  <AdjustIcon className={`text-info`} />
                  <p>Pending Tasks</p>
                </div>
                <p>47</p>
              </div>
              <div className={Styles.row4_content}>
                <div className={Styles.left_part}>
                  <AdjustIcon className={`text-danger`} />
                  <p>Review Tasks</p>
                </div>
                <p>5</p>
              </div>
            </div>
          </Card>
          <Card
            title="Today Absent"
            className={Styles.margin_left}
            bordered={false}
            style={{ width: "100%" }}
          >
            <div className={Styles.row4_col3}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar size="large" icon={<UserOutlined />} />
                <p
                  style={{
                    "fontWeight": "600",
                    "marginLeft": "0.5rem",
                    "marginTop": "0.5rem",
                  }}
                >
                  Martin Lewis
                </p>
              </div>
              <div className={Styles.row4_col3_down}>
                <div>
                  <p style={{ "fontWeight": "600", "marginTop": "0.5rem" }}>
                    4 Sep 2019
                  </p>
                  <p style={{ color: "grey" }}>Leave Date</p>
                </div>
                <p className={`pending`}>Pending</p>
              </div>
            </div>
            <div className={Styles.row4_col3}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar size="large" icon={<UserOutlined />} />
                <p
                  style={{
                    "fontWeight": "600",
                    "marginLeft": "0.5rem",
                    "marginTop": "0.5rem",
                  }}
                >
                  Martin Lewis
                </p>
              </div>
              <div className={Styles.row4_col3_down}>
                <div>
                  <p style={{ "fontWeight": "600", "marginTop": "0.5rem" }}>
                    4 Sep 2019
                  </p>
                  <p style={{ color: "grey" }}>Leave Date</p>
                </div>
                <p className={`approved`}>Approved</p>
              </div>
            </div>
            <div className={`${Styles.row4_button} row4_button`}>
              <button>Load More</button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BodyRow4;
