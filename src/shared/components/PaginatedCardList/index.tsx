import { Card, List, Pagination } from "antd";
import { useState } from "react";

interface PropsPaginatedCard {
  data: [];
}
function PaginatedCardList({ data }: PropsPaginatedCard) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Số thẻ trên mỗi trang

  const onPageChange = (page: any, pageSize: any) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <div>
      <List
        grid={{ gutter: 16, column: 5 }} // Điều này tạo một lưới 4 cột
        dataSource={paginatedData}
        renderItem={(item) => (
          <List.Item>
            <Card title={""}>{/* Nội dung thẻ (Card) */}</Card>
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={onPageChange}
      />
    </div>
  );
}

export default PaginatedCardList;
