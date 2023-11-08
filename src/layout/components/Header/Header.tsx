import routes from "@/routes";
import Search from "@/shared/components/Search";
import { NotifyHeaderIcon } from "@/shared/icon/header";
import { CartIcon, LogoHeader } from "@/shared/icon/home";
import { Col, Row, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
const linksSearchTag = [
  "Dép 1k",
  "iPhone 1k",
  "Áo 1k",
  "Set Đồ Nữ",
  "Áo Khoác 1k Freeship",
  "Hàng Boom 1k",
  "Pot Điện Tử Hút",
  "iPhone 14 Pro Max",
  "Kẹp Tóc",
  "Set 1k",
  "Váy 1k",
  "Điện Thoại Giá Rẻ 1k",
  "Ốp iPhone",
  "Điện Thoại 0đ",
  "Váy Nữ",
  "Đồ 1k",
  "Áo Thun",
  "Dép Nam",
  "Quần Áo 1k",
  "Túi Xách Nữ",
  "Son",
  "Mũ Bảo Hiểm",
  "Giày",
];

function Header() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header
      className={`header ${
        location.pathname === routes.home ? "header-fixed" : ""
      }`}
    >
      <div className="container">
        <nav className="header-navbar">
          <Row className="d-flex justify-between" style={{ width: "100%" }}>
            <Col className="d-flex align-center">
              <Link to="//banhang.shopee.vn" className="navbar-link ">
                Kênh Người Bán
              </Link>
              <Link className="navbar-link ml navbar-link-spread" to="/web/">
                Tải ứng dụng
              </Link>
              <p className="navbar-link ml navbar-link-spread">Kết nối</p>
              <div className="">
                <Link
                  className=""
                  to="https://facebook.com/ShopeeVN"
                  title="Kết nối Facebook"
                ></Link>
                <Link
                  to="https://instagram.com/Shopee_VN"
                  className=""
                  title="Kết nối Instagram!"
                ></Link>
              </div>
            </Col>
            <Col>
              <ul className="navbar-list d-flex align-center">
                <li className="navbar-item">
                  <div className="navbar-item-wrapper">
                    <Link to={""} className="item-link">
                      <NotifyHeaderIcon />
                      <Typography.Text>Thông Báo</Typography.Text>
                    </Link>
                  </div>
                </li>
                <li className="navbar-item">
                  <div className="navbar-item-wrapper">
                    <Link to={""} className="item-link">
                      <NotifyHeaderIcon />
                      <Typography.Text>Hỗ trợ</Typography.Text>
                    </Link>
                  </div>
                </li>
                <li className="navbar-item">
                  <div className="navbar-item-wrapper">
                    <Link to={""} className="item-link">
                      <NotifyHeaderIcon />
                      <Typography.Text>Tiếng việt</Typography.Text>
                    </Link>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </nav>
        <Row className="header-with-search">
          <Col className="shopee-logo">
            <Link className="logo-link" to={""}>
              <LogoHeader className="logo-link-image" />
            </Link>
          </Col>
          <Col className="shopee-search">
            <Row className="">
              <Search />
            </Row>
            <Row className="shopee-search-links">
              <Col className="shopee-search-links-wrapper d-flex">
                {linksSearchTag.map((item, index) => {
                  return (
                    <Link to={""} className="search-links" key={index}>
                      {item}
                    </Link>
                  );
                })}
              </Col>
            </Row>
          </Col>
          <Col className="shopee-cart">
            <Col className="cart-popup">
              <div className="cart-wrapper">
                <Link to={""} className="cart-link">
                  <CartIcon className="cart-link-icon" />
                </Link>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default Header;
