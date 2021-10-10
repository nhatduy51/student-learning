import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from "antd";
import Image from "./Assets/customer-5.svg";
import "antd/dist/antd.css";
import {useHistory} from "react-router-dom";

const LoginStyle = styled.div`
  margin: 0 auto;
  .form-login {
    height: 700px;
    .container {
      max-width: 1200px;
      height: 100%;
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      .ant-form {
        width: 600px;
        margin-top: 160px;
      }
    }
  }
`;

export default function LoginScreen() {

  const history = useHistory();

  const onFinish = (values) => {
    history.push('/')
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const renderLogin = () => {
    return (
      <LoginStyle>
        <div className="form-login">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={Image} alt="" />
              </div>
              <div className="col-md-6">
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </LoginStyle>
    );
  };
  return <React.Fragment>{renderLogin()}</React.Fragment>;
}
