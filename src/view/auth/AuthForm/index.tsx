import { authentication, fbAuthProvider, googleAuthProvider } from "@/firebase-config";
import usersService from "@/services/userApi";
import { Col, Row, Typography, Form, Input, Button } from "antd";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import React, {useDeferredValue } from "react";
import { useState } from "react";
type AuthFormProps = {
  typeForm: "Đăng ký" | "Đăng nhập";
  typeAuth: "Seller" | "Buyer";
};
const inputForm = {
  email: "",
  password: ""
}
fbAuthProvider.addScope("user_birthday");
  fbAuthProvider.setCustomParameters({
    'display': 'popup',

  });
function AuthForm({ typeForm, typeAuth }: AuthFormProps) {
  const { Text, Title } = Typography;
  const [input, setInputForm] = useState(inputForm);
  const [validInput, setValidInput] = useState(true);
  const resultForm = useDeferredValue(input);
  const handlerSubmitFormSignIn = async () => {
    const user = await usersService.signInByEmailAndPassword(resultForm);
    return false;
  };

  console.log(resultForm);
  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setInputForm((prev) => ({...prev,[e.target.name]: e.target.value}))
  }
  const handlerSubmitFormSignUp = () => {
    return false;
  };
  
  const handlerSignInFB = async () => {
    signInWithPopup(authentication, fbAuthProvider)
  .then((result) => {
    const user = result.user;
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
    console.log(accessToken)
  })
  .catch((error) => {

  });
  }
  const handlerSignInGoogle = async () => {
    signInWithPopup(authentication, googleAuthProvider)
    .then((result) => {
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      console.log(accessToken)

    })
    .catch((error) => {
  
    });
  }
  const componentRenderInput = typeAuth === "Buyer" ? <Input
  name="email"
  className={`input ${validInput ? "" : "errorColorBackground"}`}
  placeholder={"Số điện thoại"}
  status={validInput ? undefined : "error"}
  value={resultForm.email}
  onChange={(e) => onchangeHandler(e)}
/> : <Input
  name="email"
  className={`input ${validInput ? "" : "errorColorBackground"}`}
                  placeholder={typeForm === "Đăng ký" ? "Số điện thoại" : "Email/Số điện thoại/Tên đăng nhập"}
                  status={validInput ? undefined : "error"}
                  value={resultForm.email}
                  onChange={onchangeHandler}

                /> 
  return (
    <Col className="auth-form">
      <Row className="wrapper-title d-flex justify-center align-center">
        <Col span={24} style={{ padding: "1.375rem 30px", width: "100%" }}>
          <Title className="auth-form-title">{typeForm}</Title>
        </Col>
      </Row>
      <Row className="wrapper-input d-flex justify-center">
        <Form onFinish={typeForm === "Đăng ký" ? handlerSubmitFormSignUp : handlerSubmitFormSignIn} style={{ width: "100%" }}>
          <div className="input-group">
            <div style={{height: "2.5rem",maxHeight: "2.5rem"}}>
                {componentRenderInput}
                <Text className={`input-error ${validInput ? "hidden" : ""}`}>
                  Số điện thoại không hợp lệ
                </Text>
            </div>
          </div>
          {typeForm === "Đăng nhập" && <div className="input-group">
            <div style={{height: "2.5rem",maxHeight: "2.5rem"}}>
              <Input.Password
                name="password"
                className={`input ${validInput ? "" : "errorColorBackground"}`}
                placeholder="Mật khẩu"
                status={validInput ? undefined : "error"}
                value={resultForm.password}
                onChange={onchangeHandler}
              />
              <Text className={`input-error ${validInput ? "hidden" : ""}`}>
                Số điện thoại không hợp lệ
              </Text>
            </div>
          </div>}
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
          <Button className="button-signIn d-flex justify-center align-center" onClick={handlerSignInFB}>
            <div className="image-icon">
              <div className="fb"></div>
            </div>
            Facebook
          </Button>
          <Button className="button-signIn d-flex justify-center align-center" onClick={handlerSignInGoogle}>
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
