import React, { useState } from "react";
import Image from "next/image";
import "antd/dist/antd.css";
import MenuIcon from "@mui/icons-material/Menu";
import Styles from "../styles/Navbar.module.css";
import { Menu, Dropdown, Space, Input, Avatar } from "antd";
import { FlagOutlined, DownOutlined } from "@ant-design/icons";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
// 
const Logout = () => {
  const { logout } = useAuth();
  return (
    <>
      <a
        onClick={() => {
          logout();
          localStorage.clear();
        }}
      >
        Logout
      </a>
    </>
  );
};

const menu = (
  <Menu
    items={[
      {
        label: <a href="#">German</a>,
        key: "0",
        icon: <FlagOutlined />,
      },
      {
        label: <a href="#">Spanish</a>,
        key: "1",
        icon: <FlagOutlined />,
      },
      {
        label: <a href="#">French</a>,
        key: "2",
        icon: <FlagOutlined />,
      },

      {
        label: <a href="#">English</a>,
        key: "3",
        icon: <FlagOutlined />,
      },
    ]}
  />
);
const menu2 = (
  <Menu
    items={[
      {
        label: <a href="#">My Profile</a>,
        key: "0",
      },
      {
        label: <a href="#">Settings</a>,
        key: "1",
      },
      {
        label: (
          <Link href="/login">
            <a href="#">
              <Logout />
            </a>
          </Link>
        ),
        key: "2",
      },
    ]}
  />
);

const { Search } = Input;

const Navbar = (props) => {
  const [collapsed, uncollapsed] = useState(true);
  const toggle = () => {
    uncollapsed((value) => !value);
  };
  return (
    <>
      <style jsx>
        {`
          h2 {
            color: white;
            padding: 0;
            margin: 0;
          }
        `}
      </style>

      <div className={`${Styles.main_header}`}>
        <div className={`${Styles.left_header} temp`}>
          <Image src="/logo.png" width={30} height={30}></Image>
          <div onClick={() => props.changeWord(collapsed)}>
            <MenuIcon className={Styles.header_margins} />
          </div>

          <h2 className={Styles.header_margins}>Dreamguy's Technologies</h2>
        </div>
        <div className={Styles.right_header}>
          <Space direction="vertical">
            <Search placeholder="Search here" style={{ width: 200 }} />
          </Space>

          <Dropdown
            overlay={menu}
            trigger={["click"]}
            className={Styles.header_margins}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <FlagOutlined />
                English
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <NotificationsNoneOutlinedIcon className={Styles.header_margins} />
          <MapsUgcOutlinedIcon className={Styles.header_margins} />
          <Dropdown
            overlay={menu2}
            trigger={["click"]}
            className={Styles.header_margins}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                Admin
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Navbar;
