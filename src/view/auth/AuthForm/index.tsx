import { Col, Row, Typography, Form, Input, Button } from "antd";
import React from "react";
import { useRef, useState } from "react";
type AuthFormProps = {
  typeForm: "Đăng ký" | "Đăng nhập";
  typeAuth: "Seller" | "Buyer";
};
function AuthForm({ typeForm, typeAuth }: AuthFormProps) {
  const { Text, Title } = Typography;
  const [inputForm, setInputForm] = useState<string>();
  const [validInput, setValidInput] = useState(true);
  const inputRef = useRef(null);
  const handlerSubmitForm = () => {
    console.log(inputRef.current);
    return false;
  };
  return (
    <Col className="auth-form">
      <Row className="wrapper-title d-flex justify-center align-center">
        <Col span={24} style={{ padding: "1.375rem 30px", width: "100%" }}>
          <Title className="auth-form-title">{typeForm}</Title>
        </Col>
      </Row>
      <Row className="wrapper-input d-flex justify-center">
        <Form onFinish={handlerSubmitForm} style={{ width: "100%" }}>
          <div className="input-group">
            <Input
              name="phone"
              className={`input ${validInput ? "" : "errorColorBackground"}`}
              placeholder="Số điện thoại"
              ref={inputRef}
              status={validInput ? undefined : "error"}
            />
            <Text className={`input-error ${validInput ? "hidden" : ""}`}>
              Số điện thoại không hợp lệ
            </Text>
          </div>
          <Button htmlType="submit" className="submit-button">
            TIẾP THEO
          </Button>
        </Form>
        <div className="wrapper-line">
          <Text className="line"></Text>
          <Text className="line-text">HOẶC</Text>
          <Text className="line"></Text>
        </div>

        <div className="wrapper-fb-google">
          <Button className="button-signIn d-flex justify-center align-center">
            <div className="image-icon">
              <div className="fb"></div>
            </div>
            Facebook
          </Button>
          <Button className="button-signIn d-flex justify-center align-center">
            <div className="image-icon">
              <div className="google"></div>
            </div>
            Google
          </Button>
        </div>
      </Row>
    </Col>
  );
}

export default React.memo(AuthForm);
