import { Button, Form, Input, Modal, Select } from "antd";
import { useState } from "react";

const AddInvoiceData = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    addDataToInvoice(values);
    setTimeout(() => {
      props.getInvoiceDataFromHasura();
    }, 1000);
  };

  const addDataToInvoice = (values) => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "ZQwYINTyQvfa48X6oT9saWzGm1xzPZ3fEDWa0HONoIMbkza4Avy7bwx6psjYilic",
      },
      body: JSON.stringify({
        query: `mutation {
          insert_Invoices_one (object:{
            Invoice_Id:${values.invoice_id},Client:${values.client},Due_Date:${values.due_date},Total:${values.total},Status:${values.status}
          }){
            Invoice_Id
            Client
            Due_Date
            Total
            Status
          }
        }`,
      }),
    };
    fetch("https://dashboard-ui.hasura.app/v1/graphql", api);
  };

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add
      </Button>

      <Modal
        title="Add Invoice Data"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          initialValues={{
            layout: formLayout,
          }}
          onValuesChange={onFormLayoutChange}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item name="invoice_id" label="Invoice-ID" required="true">
            <Input placeholder="Enter invoice no" className="addDataForm" />
          </Form.Item>
          <Form.Item name="client" label="Client" required="true">
            <Input placeholder="Enter client" className="addDataForm" />
          </Form.Item>
          <Form.Item name="total" label="Total" required="true">
            <Input placeholder="Enter total amount" className="addDataForm" />
          </Form.Item>
          <Form.Item name="due_date" label="Due-Date" required="true">
            <Input placeholder="Enter due date" className="addDataForm" />
          </Form.Item>
          <Form.Item name="status" label="Status" required="true">
            <Select>
              <Select.Option value="Paid">Paid</Select.Option>
              <Select.Option value="Partially paid">
                Partially Paid
              </Select.Option>
              <Select.Option value="Unpaid">Unpaid</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="submit" htmlType="submit" className="modalButton">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddInvoiceData;
