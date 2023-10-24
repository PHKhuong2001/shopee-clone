import { Button, Checkbox, Row, Typography } from "antd";
import CollapseMenuItem from "../../Collapse";
import {
  CategoryIcon,
  CategoryIconArrowRight,
  CategoryIconFilter,
} from "@/shared/icon/category";
import { Link } from "react-router-dom";

function MenuCategory() {
  return (
    <>
      <Row className="shopee-category-list">
        <Link className="shopee-category-list__header" to={""}>
          <CategoryIcon className="shopee-category-list__header-icon" />
          Tất cả Danh mục
        </Link>
        <div className="shopee-category-list__category">
          <Link
            style={{ fontWeight: "700" }}
            to={""}
            className="shopee-category-list__sub-category active-link"
          >
            <CategoryIconArrowRight className="active-icon" />
            Thời Trang Nam
          </Link>
        </div>
        <div className="folding-items">
          <Link to={""} className="shopee-category-list__sub-category">
            <CategoryIconArrowRight className="active-icon" />
            Áo Khoác
          </Link>
          <Link to={""} className="shopee-category-list__sub-category">
            <CategoryIconArrowRight className="active-icon" />
            Áo Vest và Blazer
          </Link>
          <Link to={""} className="shopee-category-list__sub-category">
            <CategoryIconArrowRight className="active-icon" />
            Áo Hoodie, Áo Len & Áo Nỉ
          </Link>
          <Link to={""} className="shopee-category-list__sub-category">
            <CategoryIconArrowRight className="active-icon" />
            Quần Jeans
          </Link>
          <CollapseMenuItem>
            <>
              <Link to={""} className="shopee-category-list__sub-category">
                <CategoryIconArrowRight className="active-icon" />
                Quần Jeans
              </Link>
              <Link to={""} className="shopee-category-list__sub-category">
                <CategoryIconArrowRight className="active-icon" />
                Quần Jeans
              </Link>
              <Link to={""} className="shopee-category-list__sub-category">
                <CategoryIconArrowRight className="active-icon" />
                Quần Jeans
              </Link>
              <Link to={""} className="shopee-category-list__sub-category">
                <CategoryIconArrowRight className="active-icon" />
                Quần Jeans
              </Link>
            </>
          </CollapseMenuItem>
        </div>
      </Row>
      <Row className="shopee-search-filter-status">
        <CategoryIconFilter className="shopee-svg-icon" />
        Bộ lọc tìm kiếm
      </Row>
      <Row className="shopee-filter-group">
        <Typography.Text className="shopee-filter-group__header">
          Theo Danh Mục
        </Typography.Text>
        <div className="folding-items">
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <CollapseMenuItem>
            <>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>{" "}
            </>
          </CollapseMenuItem>
        </div>
      </Row>
      <Row className="shopee-filter-group">
        <Typography.Text className="shopee-filter-group__header">
          Nơi Bán
        </Typography.Text>
        <div className="folding-items">
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <CollapseMenuItem>
            <>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>{" "}
            </>
          </CollapseMenuItem>
        </div>
      </Row>
      <Row className="shopee-filter-group">
        <Typography.Text className="shopee-filter-group__header">
          Đơn Vị Vận Chuyển
        </Typography.Text>
        <div className="folding-items">
          <Checkbox className="checkbox">Hoả Tốc</Checkbox>
          <Checkbox className="checkbox">Nhanh</Checkbox>
          <Checkbox className="checkbox">Tiết Kiệm</Checkbox>
        </div>
      </Row>
      <Row className="shopee-filter-group">
        <Typography.Text className="shopee-filter-group__header">
          Thương Hiệu
        </Typography.Text>
        <div className="folding-items">
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <CollapseMenuItem>
            <>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>{" "}
            </>
          </CollapseMenuItem>
        </div>
      </Row>
      <Row className="shopee-filter-group">
        <Typography.Text className="shopee-filter-group__header">
          Khoảng Giá
        </Typography.Text>
        <div className="folding-items"></div>
      </Row>
      <Row className="shopee-filter-group">
        <Typography.Text className="shopee-filter-group__header">
          Loại Shop
        </Typography.Text>
        <div className="folding-items">
          <Checkbox className="checkbox">Shopee Mall </Checkbox>
          <Checkbox className="checkbox">Shop Yêu thích</Checkbox>
          <Checkbox className="checkbox">Shop Yêu thích +</Checkbox>
        </div>
      </Row>
      <Row className="shopee-filter-group">
        <Typography.Text className="shopee-filter-group__header">
          Tình Trạng
        </Typography.Text>
        <div className="folding-items">
          <Checkbox className="checkbox">Đã sử dụng </Checkbox>
          <Checkbox className="checkbox">Mới </Checkbox>
        </div>
      </Row>
      <Row className="shopee-filter-group">
        <Typography.Text className="shopee-filter-group__header">
          Các lựa chọn thanh toán
        </Typography.Text>
        <div className="folding-items">
          <Checkbox className="checkbox">0% TRẢ GÓP </Checkbox>
        </div>
      </Row>
      <Row className="shopee-filter-group">
        <Typography.Text className="shopee-filter-group__header">
          Đánh giá
        </Typography.Text>
        <div className="folding-items">
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <CollapseMenuItem>
            <>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>{" "}
            </>
          </CollapseMenuItem>
        </div>
      </Row>
      <Row className="shopee-filter-group">
        <Typography.Text className="shopee-filter-group__header">
          Dịch Vụ & Khuyến Mãi
        </Typography.Text>
        <div className="folding-items">
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
          <CollapseMenuItem>
            <>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>
              <Checkbox className="checkbox">Phụ kiện / Khác </Checkbox>{" "}
            </>
          </CollapseMenuItem>
        </div>
      </Row>
      <Button className="button-reset-filter">XOÁ TẤT CẢ</Button>
    </>
  );
}

export default MenuCategory;
