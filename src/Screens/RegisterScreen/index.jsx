import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import Image from "./Assets/customer-5.svg";
// import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";

const RegisterStyle = styled.div`
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

export default function RegisterScreen() {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [finish, setFinish] = React.useState("");


  // const history = useHistory();

  const onFinish = async (values) => {
    console.log("Success:", values);
    await setPassword(values.password);
    await setConfirmPassword(values.Confirmpassword);
    if (password === confirmPassword) {
     setFinish("Bạn đã đăng ký tài khoản thành công")
    }
    else setFinish("sai mật khẩu")
  };
  console.log(password, confirmPassword);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const renderRegiter = () => {
    return (
      <RegisterStyle>
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
                    label="Confirm Password"
                    name="Confirmpassword"
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <div style={{marginLeft: 200, marginBottom: 20, color:'green'}}>{finish}</div>
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
      </RegisterStyle>
    );
  };
  return <React.Fragment>{renderRegiter()}</React.Fragment>;
}
