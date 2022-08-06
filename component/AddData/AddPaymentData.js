import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";

const AddPaymentData = (props) => {
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
    addDataToPayment(values);
    setTimeout(() => {
      props.getPaymentDataFromHasura();
    }, 1000);
  };

  const addDataToPayment = (values) => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "ZQwYINTyQvfa48X6oT9saWzGm1xzPZ3fEDWa0HONoIMbkza4Avy7bwx6psjYilic",
      },
      body: JSON.stringify({
        query: `mutation {
          insert_Payments_one (object:{
            Invoice_ID:${values.invoice_id},Client:${values.client},Payment_Type:${values.payment_type},Due_Date:${values.due_date},Total:${values.total}
          }){
            Invoice_ID
            Client
            Payment_Type
            Due_Date
            Total
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
        title="Add Payment Data"
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
          <Form.Item name="payment_type" label="Payment-Type" required="true">
            <Input placeholder="Enter payment method" className="addDataForm" />
          </Form.Item>
          <Form.Item name="due_date" label="Due-Date" required="true">
            <Input placeholder="Enter due date" className="addDataForm" />
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

export default AddPaymentData;
