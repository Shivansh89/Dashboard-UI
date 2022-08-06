import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button, Space, Avatar, Progress } from "antd";
import { DownOutlined } from "@ant-design/icons";
import AdjustIcon from "@mui/icons-material/Adjust";
import DeleteIcon from "@mui/icons-material/Delete";
import { Table } from "antd";
import Styles from "../../styles/Body.module.css";
import AddClientData from "../AddData/AddClientData";
import AddProjectData from "../AddData/AddProjectData";
import UpdateClientData from "../UpdateData/UpdateClientData";
import UpdateProjectData from "../UpdateData/UpdateProjectData";

// table 1 delete
const deleteDataFromClient = (clientRecord) => {
  const api = {
    method: "POST",
    headers: {
      "x-hasura-admin-secret":
        "ZQwYINTyQvfa48X6oT9saWzGm1xzPZ3fEDWa0HONoIMbkza4Avy7bwx6psjYilic",
    },
    body: JSON.stringify({
      query: `mutation {
          delete_Clients(where: {Email: {_eq: "${clientRecord.Email}"}}){
            affected_rows
          }
        }`,
    }),
  };
  fetch("https://dashboard-ui.hasura.app/v1/graphql", api);
};

//  table 2 delete

const deleteDataFromProject = (projectRecord) => {
  const api = {
    method: "POST",
    headers: {
      "x-hasura-admin-secret":
        "ZQwYINTyQvfa48X6oT9saWzGm1xzPZ3fEDWa0HONoIMbkza4Avy7bwx6psjYilic",
    },
    body: JSON.stringify({
      query: `mutation {
          delete_Projects(where: {Project_Name: {_eq: "${projectRecord.Project_Name}"}}){
            affected_rows
          }
        }`,
    }),
  };
  fetch("https://dashboard-ui.hasura.app/v1/graphql", api);
};

const active_button_menu = (
  <Menu
    items={[
      {
        label: "Active",
        key: "1",
        icon: <AdjustIcon className="active_green" />,
      },
      {
        label: "Inactive",
        key: "2",
        icon: <AdjustIcon className="inactive_red" />,
      },
    ]}
  />
);

const menu_button_project = (projectRecord) => (
  <Menu
    items={[
      {
        key: "1",
        label: "Edit",
        icon: <UpdateProjectData projectRecord={projectRecord} />,
      },
      {
        key: "2",
        label: "Delete",
        icon: (
          <button
            className="edit_button"
            onClick={() => deleteDataFromProject(projectRecord)}
          >
            <DeleteIcon />
          </button>
        ),
      },
    ]}
  />
);
const menu_button_client = (clientRecord) => (
  <Menu
    items={[
      {
        key: "1",
        label: "Edit",
        icon: <UpdateClientData clientRecord={clientRecord} />,
      },
      {
        key: "2",
        label: "Delete",
        icon: (
          <button
            className="edit_button"
            onClick={() => deleteDataFromClient(clientRecord)}
          >
            <DeleteIcon />
          </button>
        ),
      },
    ]}
  />
);

const columns_table1 = [
  {
    title: "Name",
    dataIndex: "Name",
    render: (name) => (
      <div className="row6_table1">
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <div className="r6_t1_name">
          <h6>{name}</h6>
          <p>CEO</p>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "Email",
  },
  {
    title: "Status",
    dataIndex: "Status",
    render: (status) => (
      <>
        <Space wrap>
          <Dropdown overlay={active_button_menu} trigger={["click"]}>
            <Button style={{ borderRadius: "25px" }}>
              <Space>
                <AdjustIcon
                  className={`${
                    status == "Active" ? "active_green" : "inactive_red"
                  }`}
                />
                {status}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
      </>
    ),
  },
  {
    title: "Action",
    dataIndex: "Action",
    render: (text, record) => {
      const clientRecord = record;
      return (
        <>
          <Dropdown.Button
            overlay={menu_button_client(clientRecord)}
            trigger={["click"]}
          ></Dropdown.Button>
        </>
      );
    },
  },
];
const columns_table2 = [
  {
    title: "Project Name",
    dataIndex: "Project_Name",
    render: (name) => (
      <div className="r6_t1_name">
        <h6>{name}</h6>
        <p>
          <span>4</span> open tasks, <span>9</span> tasks completed
        </p>
      </div>
    ),
  },
  {
    title: "Progress",
    dataIndex: "Progress",
    render: (progress) => (
      <Progress
        percent={progress}
        showInfo={false}
        strokeColor="#25628f"
        strokeWidth="3px"
      />
    ),
  },
  {
    title: "Action",
    dataIndex: "Action",
    render: (text, record) => {
      const projectRecord = record;
      return (
        <>
          <Dropdown.Button
            overlay={menu_button_project(projectRecord)}
            trigger={["click"]}
          ></Dropdown.Button>
        </>
      );
    },
  },
];

const BodyRow6 = () => {
  //  table1 GET
  const [clientData, setData] = useState();
  const getClientDataFromHasura = () => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "ZQwYINTyQvfa48X6oT9saWzGm1xzPZ3fEDWa0HONoIMbkza4Avy7bwx6psjYilic",
      },
      body: JSON.stringify({
        query: `query {
          Clients {
            Name
            Email
            Status
            Action
          }
        }`,
      }),
    };
    fetch("https://dashboard-ui.hasura.app/v1/graphql", api)
      .then(async (response) => {
        const clientTable = await response.json();
        setData(clientTable.data.Clients);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getClientDataFromHasura();
  }, []);

  // table2 GET
  const [projectData, setProjectData] = useState();
  const getProjectDataFromHasura = () => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "ZQwYINTyQvfa48X6oT9saWzGm1xzPZ3fEDWa0HONoIMbkza4Avy7bwx6psjYilic",
      },
      body: JSON.stringify({
        query: `query {
          Projects {
            Project_Name
            Progress
            Action
          }
        }`,
      }),
    };
    fetch("https://dashboard-ui.hasura.app/v1/graphql", api)
      .then(async (response) => {
        const projectTable = await response.json();
        setProjectData(projectTable.data.Projects);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProjectDataFromHasura();
  }, []);

  return (
    <>
      <div className={`${Styles.body_row5} ${Styles.contain}`}>
        <div className={Styles.body_row5_table1}>
          <div className={`${Styles.row5_table1_heading} row5_table1_heading`}>
            <h5>Clients</h5>
            <div>
              <AddClientData
                getClientDataFromHasura={getClientDataFromHasura}
              />
            </div>
          </div>
          <Table
            scroll={{ x: 650, y: 350 }}
            columns={columns_table1}
            dataSource={clientData}
          />
          <div className={`${Styles.row5_table1_button} row5_table1_button`}>
            <button>View All clients</button>
          </div>
        </div>
        <div className={`${Styles.body_row5_table1} ${Styles.row5_margin}`}>
          <div className={`${Styles.row5_table1_heading} row5_table1_heading`}>
            <h5>Projects</h5>
            <div>
              <AddProjectData
                getProjectDataFromHasura={getProjectDataFromHasura}
              />
            </div>
          </div>
          <Table
            scroll={{ x: 650, y: 350 }}
            columns={columns_table2}
            dataSource={projectData}
          />
          <div className={`${Styles.row5_table1_button} row5_table1_button`}>
            <button>View All projects</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyRow6;
