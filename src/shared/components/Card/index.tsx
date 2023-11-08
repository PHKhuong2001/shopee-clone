import { Card, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

type PropsCardProduct<T> = {
  cards: T[];
  className?: string
};
function CardProduct({ cards, className }: PropsCardProduct<string>) {
  return (
    <Link to={""} className={`card ${className}`}>
      <Card
        className="card-product"
        cover={
          <img
            alt="example"
            src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkanfbnbjjq4bd_tn"
          />
        }
      >
        <Row style={{ marginBottom: "0.25rem", minHeight: "40px" }}>
          <Col span={24}>
            <Typography.Text className="product-text">
              [VN] iphone 14 pr0+max dl 256gb - hàng 99% - bảo hành 12 tháng -
              đổi trả trong 7 ngày
            </Typography.Text>
          </Col>
        </Row>
        <Row style={{ marginBottom: "0.5rem", minHeight: "16px" }}></Row>
        <Row style={{ minHeight: "20px" }}>
          <Col className="d-flex justify-between align-center" span={24}>
            <Typography.Text className="product-price">₫25.900</Typography.Text>
            <Typography.Text className="product-sold">
              Đã bán 6,3k
            </Typography.Text>
          </Col>
        </Row>
      </Card>
    </Link>
  );
}

export default CardProduct;
