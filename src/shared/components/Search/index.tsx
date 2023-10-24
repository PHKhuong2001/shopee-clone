import { SearchIcon } from "@/shared/icon/header";
import { Button, Col, Form, Input, Row } from "antd";
import { useCallback } from "react";

function Search() {
  const handlerSubmit = useCallback(() => {}, []);
  return (
    <Form onFinish={handlerSubmit} className="shopee-search-bar">
      <Row style={{ width: "100%" }}>
        <Col className="shopee-search-bar-input">
          <Input
            className="input"
            placeholder="Tìm sản phẩm, thương hiệu, và tên shop"
          />
        </Col>
        <Col className="shopee-search-bar-button">
          <Button className="button">
            <SearchIcon className="search-icon" />
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Search;
