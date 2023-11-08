import { bannerSlideListCategory, shopeeMall } from "@/config/list-ui";
import Carosuel from "@/shared/components/Carosuel";
import MenuCategory from "@/shared/components/Menu/MenuCategory";
import {
  Button,
  Col,
  Dropdown,
  MenuProps,
  Row,
  Space,
  Typography,
  message,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import PaginatedCardList from "@/shared/components/PaginatedCardList";

function Category() {
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const items: MenuProps["items"] = [
    {
      label: "Giá: Thấp đến Cao",
      key: "1",
    },
    {
      label: "Giá: Cao đến Thấp",
      key: "2",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="category-page">
      <Row className="section-banner">
        <Col style={{ width: "100%" }} span={24}>
          <Carosuel
            dataSlide={bannerSlideListCategory}
            style={{ height: "360px" }}
            type="image"
          ></Carosuel>
        </Col>
      </Row>
      <main className="main-container">
        <section className="section-below-the-fold">
          <Col className="category-title" style={{minHeight:"0"}}>
            <Row className="custom-header d-flex align-center" style={{border: 0}}>
              <Typography.Title className="custom-header-title">
                Danh Mục
              </Typography.Title>
            </Row>
            <Row className="category-list" style={{height: "226px"}}>
              <Carosuel
                dataSlide={shopeeMall}
                type={"shopee-mall"}
                style={{ width: "1200px",height: "226px" }}
                lenghtDataItem={12}
                lengthDataList={2}
              />
            </Row>
          </Col>
        </section>
        <section className="products">
          <Row className="products-wrapper">
            <Col className="category-menu">
              <MenuCategory />
            </Col>
            <Col className="category-products">
              <Row className="shopee-sort-bar">
                <Typography.Text className="shopee-sort-bar__label">
                  Sắp xếp theo
                </Typography.Text>
                <div className="shopee-sort-by-options">
                  <Button className="button-options-filter option-selected">
                    Phổ Biến
                  </Button>
                  <Button className="button-options-filter">Mới Nhất</Button>
                  <Button className="button-options-filter">Bán Chạy</Button>
                  <Dropdown menu={menuProps}>
                    <Button
                      style={{ minWidth: "12.5rem" }}
                      className="button-options-filter"
                    >
                      <Space className="d-flex justify-between">
                        Giá
                        <DownOutlined />
                      </Space>
                    </Button>
                  </Dropdown>
                </div>
              </Row>
              <Row className="shopee-item-result">
                <PaginatedCardList paginationClassName="pagination" data={["1","2","3","4","5","6"]}></PaginatedCardList>
              </Row>
            </Col>
          </Row>
        </section>
      </main>
    </div>
  );
}

export default Category;
