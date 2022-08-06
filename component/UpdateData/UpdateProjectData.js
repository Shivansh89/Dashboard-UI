import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

const UpdateProjectData = (props) => {
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
    updateDataToProject(values);
  };

  const updateDataToProject = (values) => {
    const api = {
      method: "POST",
      headers: {
        "x-hasura-admin-secret":
          "ZQwYINTyQvfa48X6oT9saWzGm1xzPZ3fEDWa0HONoIMbkza4Avy7bwx6psjYilic",
      },
      body: JSON.stringify({
        query: `mutation{
          update_Projects(where:{Project_Name: {_eq:${props.projectRecord.Project_Name}}}, _set:{Project_Name:${values.project_name},Progress:${values.progress}}){
            returning{
              Progress
            }
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
      <Button type="primary" onClick={showModal} className="edit_button">
        <ModeEditOutlinedIcon style={{ color: "black" }} />
      </Button>

      <Modal
        title="Update Project Data"
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
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateProjectData;
