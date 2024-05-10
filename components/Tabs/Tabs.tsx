// Tabs.tsx
import React, { useState } from "react";
import "./Tabs.css";

interface TabProps {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
}

export const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <ul className="tab-list">
        {children.map((tab, index) => (
          <li
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
