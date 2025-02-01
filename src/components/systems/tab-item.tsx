// src/components/TabItem.tsx
import React from "react";

interface TabItemProps {
  isActive: boolean; // กำหนดว่าจะโชว์เนื้อหาหรือซ่อน
  children: React.ReactNode; // เนื้อหาที่จะแสดงใน Tab
}

const TabItem: React.FC<TabItemProps> = ({ isActive, children }) => {
  return (
    <div className={`${isActive ? "block" : "hidden"} py-4`}>{children}</div>
  );
};

export default TabItem;
