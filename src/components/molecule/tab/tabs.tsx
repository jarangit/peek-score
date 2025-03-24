// src/components/Tabs.tsx
import React, { useState, ReactNode } from "react";

export interface TabItem {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultIndex?: number;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-600">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`py-2 px-4 font-medium cursor-pointer ${
              activeIndex === index
                ? "!border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-primary"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className=" mt-3">{tabs[activeIndex].content}</div>
    </div>
  );
};

export default Tabs;
