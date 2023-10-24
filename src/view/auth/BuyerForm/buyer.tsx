import { useEffect, useRef, useState } from "react";

function Buyer() {
  const textContentRef = useRef<HTMLDivElement | null>(null);
  const [hiddenContent, setHiddenContent] = useState({
    hidden: true,
    width: "",
  });
  useEffect(() => {
    const textContentElement = textContentRef.current as HTMLDivElement;
    if (textContentElement) {
      const rect = textContentElement.getBoundingClientRect();
      console.log("Width:", rect.width, "Height:", rect.height);
      if (rect.width) {
        setHiddenContent({ hidden: false, width: `${rect.width}px` });
      }
    }
  }, []);

  return (
    <div className="wrapper-form">
      <div
        className="text-content-auth"
        style={{ width: hiddenContent.width }}
        ref={textContentRef}
      >
        {hiddenContent.hidden && (
          <>
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
          </>
        )}
      </div>
      <div className="form-content-auth"></div>
    </div>
  );
}

export default Buyer;
