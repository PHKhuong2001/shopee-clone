import { List, Row } from "antd";
import { DataSlideProps } from ".";
import { Link } from "react-router-dom";
type ItemProps = {
  item: DataSlideProps;
  typeItem?: string;
};
function ItemCarosel({ item, typeItem }: ItemProps) {
  return (
    <List.Item className={`product-item ${typeItem}`}>
      <Link to={item.path} className={`product-item-link`}>
        <h5>{item?.name}</h5>
        {typeItem === "shopee-mall" ? (
          <Row
            className={`${typeItem}-image`}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          ></Row>
        ) : (
          <></>
        )}
      </Link>
    </List.Item>
  );
}

export default ItemCarosel;
