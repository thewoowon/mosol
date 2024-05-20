// Tabs.tsx
import React, { useState } from "react";
import "./Tabs.css";

interface TabProps {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
  onChange?: (index: number) => void;
}

export const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export const Tabs = ({ children, onChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onChange && onChange(index);
  };

  // 0: <Tab label="여자 이상형">
  // 1: <Tab label="남자 이상형">
  return (
    <div className="tabs">
      <ul className="tab-list">
        {children.map((tab, index) => (
          <li
            id={`tab-list-item-${index === 0 ? "female" : "male"}`}
            key={index}
            className={`tab-list-item ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.props.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
