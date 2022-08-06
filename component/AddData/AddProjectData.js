import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";

const AddProjectData = (props) => {
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
    addDataToProject(values);
    setTimeout(() => {
      props.getProjectDataFromHasura();
    }, 1000);
  };

  const addDataToProject = (values) => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "ZQwYINTyQvfa48X6oT9saWzGm1xzPZ3fEDWa0HONoIMbkza4Avy7bwx6psjYilic",
      },
      body: JSON.stringify({
        query: `mutation {
          insert_Projects_one (object:{
            Project_Name:${values.project_name},Progress:${values.progress}
          }){
            Project_Name
            Progress
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
        title="Add Project Data"
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
          <Form.Item name="project_name" label="Project-Name" required="true">
            <Input placeholder="Enter project name" className="addDataForm" />
          </Form.Item>
          <Form.Item name="progress" label="Progress" required="true">
            <Input placeholder="Enter progress" className="addDataForm" />
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

export default AddProjectData;
