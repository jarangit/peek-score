import React, { useState } from "react";

interface TabProps {
  tabs: string[]; // Array of tab names
  children: React.ReactNode[]; // Corresponding tab content
}

const TabsContainer: React.FC<TabProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0); // Tracks the active tab index

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex space-x-2 overflow-y-auto text-nowrap ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-1 ${
              activeTab === index
                ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-4">
        {children.map((child, index) => (
          <div
            key={index}
            className={`${activeTab === index ? "block" : "hidden"}`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsContainer;
