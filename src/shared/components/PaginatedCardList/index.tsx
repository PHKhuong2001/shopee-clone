import { List, Pagination } from "antd";
import { useState } from "react";
import CardProduct from "../Card";

interface PropsPaginatedCard {
  data: string[];
  paginationClassName?: string;
}
function PaginatedCardList({ data,paginationClassName }: PropsPaginatedCard) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Số thẻ trên mỗi trang

  const onPageChange = (page: any, pageSize: any) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <div style={{width: "100%"}}>
      <List
        grid={{ gutter: 2, column: 5 }} // Điều này tạo một lưới 4 cột
        dataSource={paginatedData}
        renderItem={(item) => (
              <CardProduct className="card__category" cards={[""]} />
        )}
      />
      <Pagination
        className={paginationClassName}
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={onPageChange}
      />
    </div>
  );
}

export default PaginatedCardList;
