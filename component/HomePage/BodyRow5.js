import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import Styles from "../../styles/Body.module.css";
import AddInvoiceData from "../AddData/AddInvoiceData";
import AddPaymentData from "../AddData/AddPaymentData";

const columns_table1 = [
  {
    title: "Invoice ID",
    dataIndex: "Invoice_Id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Client",
    dataIndex: "Client",
  },
  {
    title: "Due Date",
    dataIndex: "Due_Date",
  },
  {
    title: "Total",
    dataIndex: "Total",
  },
  {
    title: "Status",
    dataIndex: "Status",
    render: (text) => {
      {
        if (text == "Paid") {
          return (
            <>
              <p
                className="size_small"
                style={{
                  color: "#26b07d",
                  background: "#e2f6ed",
                  marginBottom: 0,
                }}
              >
                {text}
              </p>
            </>
          );
        } else if (text == "Partially Paid") {
          return (
            <>
              <p
                className="size_small"
                style={{
                  color: "#f49c18",
                  background: "#fff2e0",
                  marginBottom: 0,
                }}
              >
                {text}
              </p>
            </>
          );
        } else {
          return (
            <>
              <p
                className="size_small"
                style={{
                  color: "#e9413c",
                  background: "#fde2e7",
                  marginBottom: 0,
                }}
              >
                {text}
              </p>
            </>
          );
        }
      }
    },
  },
];
const columns_table2 = [
  {
    title: "Invoice ID",
    dataIndex: "Invoice_ID",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Client",
    dataIndex: "Client",
  },
  {
    title: "Payment Type",
    dataIndex: "Payment_Type",
  },
  {
    title: "Due Date",
    dataIndex: "Due_Date",
  },
  {
    title: "Total",
    dataIndex: "Total",
  },
];
const BodyRow5 = () => {
  // table1
  const [invoiceTableData, setData] = useState();
  const getInvoiceDataFromHasura = () => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "ZQwYINTyQvfa48X6oT9saWzGm1xzPZ3fEDWa0HONoIMbkza4Avy7bwx6psjYilic",
      },
      body: JSON.stringify({
        query: `query {
          Invoices {
            Invoice_Id
            Client
            Due_Date
            Status
            Total
          }
        }`,
      }),
    };
    fetch("https://dashboard-ui.hasura.app/v1/graphql", api)
      .then(async (response) => {
        const invoiceTable = await response.json();
        setData(invoiceTable.data.Invoices);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getInvoiceDataFromHasura();
  }, []);

  // table2
  const [paymentTableData, setPaymentData] = useState();
  const getPaymentDataFromHasura = () => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "ZQwYINTyQvfa48X6oT9saWzGm1xzPZ3fEDWa0HONoIMbkza4Avy7bwx6psjYilic",
      },
      body: JSON.stringify({
        query: `query {
          Payments{
            Invoice_ID
            Client
            Payment_Type
            Due_Date
            Total
          }
        }`,
      }),
    };
    fetch("https://dashboard-ui.hasura.app/v1/graphql", api)
      .then(async (response) => {
        const paymentTable = await response.json();
        setPaymentData(paymentTable.data.Payments);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPaymentDataFromHasura();
  }, []);

  return (
    <>
      <div className={`${Styles.body_row5} ${Styles.contain}`}>
        <div className={Styles.body_row5_table1}>
          <div className={`${Styles.row5_table1_heading} row5_table1_heading`}>
            <h5>Invoices</h5>
            <div>
              <AddInvoiceData
                getInvoiceDataFromHasura={getInvoiceDataFromHasura}
              />
            </div>
          </div>
          <Table
            scroll={{ x: 650, y: 250 }}
            columns={columns_table1}
            dataSource={invoiceTableData}
          />
          <div className={`${Styles.row5_table1_button} row5_table1_button`}>
            <button>View All invoices</button>
          </div>
        </div>
        <div className={`${Styles.body_row5_table1} ${Styles.row5_margin}`}>
          <div className={`${Styles.row5_table1_heading} row5_table1_heading`}>
            <h5>Payments</h5>
            <div>
              <AddPaymentData
                getPaymentDataFromHasura={getPaymentDataFromHasura}
              />
            </div>
          </div>
          <Table
            scroll={{ x: 650, y: 250 }}
            columns={columns_table2}
            dataSource={paymentTableData}
          />
          <div className={`${Styles.row5_table1_button} row5_table1_button`}>
            <button>View All payments</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyRow5;
