import {
  bannerSlideList,
  benefitBanner,
  contentSlideList,
} from "@/config/list-ui";
import CardProduct from "@/shared/components/Card";
import Carosuel from "@/shared/components/Carosuel";
import { Col, Row, Typography, Image } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
const products = [
  {
    name: "Product 1",
    path: "/category",
    image: "",
  },
  {
    name: "Product 2",
    path: "",
    image: "",
  },
  {
    name: "Product 3",
    path: "",
    image: "",
  },
  {
    name: "Product 4",
    path: "",
    image: "",
  },
  {
    name: "Product 5",
    path: "",
    image: "",
  },
  {
    name: "Product 6",
    path: "",
    image: "",
  },
  {
    name: "Product 7",
    path: "",
    image: "",
  },
  {
    name: "Product 8",
    path: "",
    image: "",
  },
  {
    name: "Product 9",
    path: "",
    image: "",
  },
  {
    name: "Product 10",
    path: "",
    image: "",
  },
  {
    name: "Product 11",
    path: "",
    image: "",
  },
  {
    name: "Product 12",
    path: "",
    image: "",
  },
  {
    name: "Product 13",
    path: "",
    image: "",
  },
  {
    name: "Product 14",
    path: "",
    image: "",
  },
  {
    name: "Product 15",
    path: "",
    image: "",
  },
  {
    name: "Product 16",
    path: "",
    image: "",
  },
  {
    name: "Product 17",
    path: "",
    image: "",
  },
  {
    name: "Product 18",
    path: "",
    image: "",
  },
  {
    name: "Product 19",
    path: "",
    image: "",
  },
  {
    name: "Product 20",
    path: "",
    image: "",
  },
  {
    name: "Product 21",
    path: "",
    image: "",
  },
  {
    name: "Product 22",
    path: "",
    image: "",
  },
  {
    name: "Product 23",
    path: "",
    image: "",
  },
  {
    name: "Product 24",
    path: "",
    image: "",
  },
  {
    name: "Product 25",
    path: "",
    image: "",
  },
  {
    name: "Product 26",
    path: "",
    image: "",
  },
  {
    name: "Product 27",
    path: "",
    image: "",
  },
  {
    name: "Product 28",
    path: "",
    image: "",
  },
  {
    name: "Product 29",
    path: "",
    image: "",
  },
  {
    name: "Product 30",
    path: "",
    image: "",
  },
  {
    name: "Product 31",
    path: "",
    image: "",
  },
  {
    name: "Product 32",
    path: "",
    image: "",
  },
  {
    name: "Product 33",
    path: "",
    image: "",
  },
  {
    name: "Product 34",
    path: "",
    image: "",
  },
  {
    name: "Product 35",
    path: "",
    image: "",
  },
  {
    name: "Product 36",
    path: "",
    image: "",
  },
  {
    name: "Product 37",
    path: "",
    image: "",
  },
  {
    name: "Product 38",
    path: "",
    image: "",
  },
  {
    name: "Product 39",
    path: "",
    image: "",
  },
];
function Home() {
  return (
    <div className="home-page">
      <section className="section-banner">
        <Row className="wrapper-banner-carosuel d-flex">
          <Col className="banner-carosuel-main">
            <Carosuel type={"image"} dataSlide={bannerSlideList} />
          </Col>
          <Col className="banner-carosuel-right">
            <Link to={"#"} className="right-image">
              <Row className="right-image-wrapper">
                <Image
                  src="https://cf.shopee.vn/file/vn-50009109-8c5de46fae8d14618e6c9824fcdebfe1_xhdpi"
                  alt=""
                  className="image"
                  preview={false}
                />
              </Row>
            </Link>
            <Link to={"#"} className="right-image">
              <Row className="right-image-wrapper">
                <Image
                  src="https://cf.shopee.vn/file/vn-50009109-489fa6f1ff4fb0f2dadaa2b226474715_xhdpi"
                  alt=""
                  className="image"
                  preview={false}
                />
              </Row>
            </Link>
          </Col>
        </Row>
        <Row className="wrapper-banner-benefit">
          {benefitBanner.map((benefit, index) => {
            return (
              <Link to={"#"} className="benefit-links" key={index}>
                <div className="benefit-image">
                  <Image src={benefit.image} className="image"></Image>
                </div>
                <div className="benefit-title">
                  <Title className="title">{benefit.name}</Title>
                </div>
              </Link>
            );
          })}
        </Row>
      </section>
      <main className="main-container">
        <section className="section-below-the-fold">
          <Col className="category-title">
            <Row className="custom-header d-flex align-center">
              <Typography.Title className="custom-header-title">
                Danh Mục
              </Typography.Title>
            </Row>
            <Row className="category-list">
              <Carosuel
                dataSlide={products}
                type={"slide"}
                style={{ width: "1200px" }}
                lenghtDataItem={20}
                lengthDataList={2}
              ></Carosuel>
            </Row>
          </Col>
        </section>
        <section className="section-below-the-fold">
          <Col className="category-title">
            <Row className="custom-header d-flex align-center">
              <Typography.Title className="custom-header-title">
                Danh Mục
              </Typography.Title>
            </Row>
            <Row className="category-list"></Row>
          </Col>
        </section>
        <section className="section-below-the-fold">
          <Col className="category-title">
            <Row className="custom-header d-flex align-center">
              <Typography.Title className="custom-header-title">
                Danh Mục
              </Typography.Title>
            </Row>
            <Row>
              <Col className="content-carosuel">
                <Carosuel
                  type={"image"}
                  dataSlide={contentSlideList}
                  style={{ height: "100%" }}
                />
              </Col>
              <Col></Col>
            </Row>
          </Col>
        </section>
        <Row
          className="container-voucher"
          style={{ marginTop: "20px", height: "110px" }}
        >
          <Image
            src="https://cf.shopee.vn/file/sg-50009109-454c7994f27979b90a977b4de84465a9"
            alt="voucher"
            className="image-voucher"
            preview={false}
          />
          <div className="links-voucher">
            <Link to={"#"} className="links"></Link>
            <Link to={"#"} className="links"></Link>
            <Link to={"#"} className="links"></Link>
          </div>
        </Row>
        <section className="section-below-the-fold">
          <Col
            className="product-list"
            style={{ backgroundColor: "transparent" }}
          >
            <Row className="custom-header product-header d-flex align-center tabs">
              <Typography.Title className="custom-header-title">
                GỢI Ý HÔM NAY
              </Typography.Title>
            </Row>
            <Row className="product-list">
              <CardProduct cards={[""]} />
            </Row>
          </Col>
        </section>
      </main>
    </div>
  );
}

export default Home;
