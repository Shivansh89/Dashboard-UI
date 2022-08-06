import { Button, Form, Input, Modal, Select } from "antd";
import { useState } from "react";

const AddClientData = (props) => {
  console.log(props.getClientDataFromHasura);
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
    addDataToClient(values);
    setTimeout(() => {
      props.getClientDataFromHasura();
    }, 1000);
  };

  const addDataToClient = (values) => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "ZQwYINTyQvfa48X6oT9saWzGm1xzPZ3fEDWa0HONoIMbkza4Avy7bwx6psjYilic",
      },
      body: JSON.stringify({
        query: `mutation {
          insert_Clients_one (object:{
            Name:${values.name},Email:"${values.email}",Status:${values.status}
          }){
            Name
            Email
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
        title="Add Client Data"
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
          <Form.Item name="name" label="Name" required="true">
            <Input placeholder="Enter name" className="addDataForm" />
          </Form.Item>
          <Form.Item name="email" label="Email" required="true">
            <Input placeholder="Enter email" className="addDataForm" />
          </Form.Item>
          <Form.Item label="Status" name="status" required="true">
            <Select>
              <Select.Option value="Active">Active</Select.Option>
              <Select.Option value="Inactive">Inactive</Select.Option>
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

export default AddClientData;
