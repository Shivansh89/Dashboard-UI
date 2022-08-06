import React, { useState } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  DashboardOutlined,
  FundOutlined,
  UserOutlined,
  FileTextOutlined,
  PoundOutlined,
  ReadOutlined,
  RocketOutlined,
  StopOutlined,
  BellOutlined,
  DingdingOutlined,
  SettingOutlined, 
} from "@ant-design/icons";

const { Sider } = Layout;
const items = [
  getItem("Dashboard", "sub1", <DashboardOutlined />, [
    getItem("", "5", <Link href='/'> Admin Dashboard </Link>),
    getItem("", "6", <Link href='/employee-dashboard'> Employee Dashboard </Link>),
  ]),
  getItem("Apps", "sub2", <PieChartOutlined />, [
    getItem("Chat", "9", <AppstoreOutlined />),

    getItem("Calls", "sub3", null, [
      getItem("Voice Call", "11"),
      getItem("Video Call", "12", <DesktopOutlined />),
    ]),
    getItem("Calender", "10"),
    getItem("Contacts", "13"),
    getItem("Email", "14"),
    getItem("File Manager", "15"),
  ]),
  getItem("Employees", "sub4", <ContainerOutlined />, [
    getItem("All Employees", "16"),
    getItem("Holidays", "18"),
    getItem("Leaves", "19"),
    getItem("Attendance", "20"),]),
  getItem("Clients", "17", <UserOutlined />),
  getItem("Employees", "sub5", <AppstoreOutlined />, [
    getItem("Projects", "21"),
    getItem("Tasks", "22"),
    getItem("Task board", "23"),]),
  getItem("Leads", "2", <DesktopOutlined />),
  getItem("Tickets", "3", <AppstoreOutlined />),
  getItem("Accounts", "sub6", <FileTextOutlined />, [
    getItem("Estimates", "24"),
    getItem("Invoices", "25"),]),
    getItem("Payroll", "sub7", <FundOutlined />, [
      getItem("Employee Salary", "26"),
      getItem("Pay Slip", "27"),]),
      getItem("Policies", "28",<FileTextOutlined />),
      getItem("Reports", "sub8", <FundOutlined />, [
        getItem("Inoice Repot", "29"),
        getItem("Expense Report", "30"),]),
      getItem("Goals", "sub9", <PoundOutlined />, [
        getItem("Goal List", "31"),
        getItem("Goal Type", "32"),]),
      getItem("Training", "sub10", <ReadOutlined />, [
        getItem("Training List", "33"),
        getItem("Trainers", "34"),
        getItem("Training Type", "35"),]),
        getItem("Promotion", "36",<RocketOutlined />),
        getItem("Resignation", "37",<FileTextOutlined />),
        getItem("Termination", "38",<StopOutlined />),
        getItem("Assets", "39",<DesktopOutlined />),
        getItem("Jobs", "sub11", <DingdingOutlined />, [
          getItem("Manage Jobs", "40"),
          getItem("Applied Candidates", "41"),]),
          getItem("Activities", "42",<BellOutlined />),
          getItem("Settings", "43",<SettingOutlined />),
];
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export default function Slider(props) {
  const [collapsed, uncollapsed] = useState(false);
  const toggle = () => uncollapsed((value) => !value);
  return (
    <>
      <div className="slider_main">
        <Sider
          width={230}
          style={{
            overflow: 'auto',
            height: '100vh',
            left: 0,
            top: 0,
            bottom: 0,
          }}
          collapsed={props.val}
          onCollapse={toggle}
        >
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
          />
        </Sider>
      </div>
    </>
  );
}
