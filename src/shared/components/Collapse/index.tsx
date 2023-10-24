import { Collapse, Typography } from "antd";
import { useState } from "react";
const { Panel } = Collapse;
type CollapseMenuProps = {
  children: JSX.Element;
};
function CollapseMenuItem({ children }: CollapseMenuProps) {
  const [activeKey, setActiveKey] = useState<string | string[]>(""); // Sử dụng giá trị mặc định là ''

  const handleCollapse = () => {
    setActiveKey(activeKey === "" ? "1" : "");
  };
  return (
    <Collapse
      bordered={false}
      style={{ background: "transparent" }}
      activeKey={activeKey}
      onChange={handleCollapse}
    >
      <Panel
        key="1"
        header={activeKey ? "" : <Typography.Text>Thêm</Typography.Text>}
        className={`collapse-more ${activeKey ? "hide-header" : ""}`}
        showArrow={activeKey ? false : true}
      >
        {children}
      </Panel>
    </Collapse>
  );
}

export default CollapseMenuItem;
