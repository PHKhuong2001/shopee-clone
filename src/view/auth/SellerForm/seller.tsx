import React from "react";
import AuthForm from "../AuthForm";
import { useLocation } from "react-router-dom";
import { Col, Row } from "antd";

function Seller() {
  const { pathname } = useLocation();
  return (
    <Col span={24} className="wrapper-form">
      <Row className="text-content-auth">
        <h2>Shopee Việt Nam</h2>
        <h1>Trở thành Người bán ngay hôm nay</h1>
        <div className="assets-text">
          <div className="assets-size assets-backgroundUrl-shop assets-background-shop"></div>
          <p>Nền tảng thương mại điện tử hàng đầu Đông Nam Á và Đài Loan</p>
        </div>
        <div className="assets-text">
          <div className="assets-size assets-backgroundUrl-gift assets-background-gift"></div>
          <p>Phát triển trở thành thương hiệu toàn cầu</p>
        </div>
        <div className="assets-text">
          <div className="assets-size assets-backgroundUrl-cooperation assets-background-cooperation"></div>
          <p>Dẫn đầu lượng người dùng trên ứng dụng mua sắm tại Việt Nam</p>
        </div>
      </Row>
      <AuthForm
        typeAuth="Seller"
        typeForm={pathname.includes("login") ? "Đăng nhập" : "Đăng ký"}
      />
    </Col>
  );
}

export default React.memo(Seller);
