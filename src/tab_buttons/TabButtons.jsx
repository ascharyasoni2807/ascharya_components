// src/App.js
import React, { useState } from "react";
import "./TabButtons.css";

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={index === activeTab ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

function TabButtons() {
  const tabs = [
    {
      label: "Tab 1",
      content: <p>Content of Tab 1</p>,
    },
    {
      label: "Tab 2",
      content: <p>Content of Tab 2</p>,
    },
    {
      label: "Tab 3",
      content: <p>Content of Tab 3</p>,
    },
  ];

  return (
    <div className="App">
      <h1>Tab Component</h1>
      <Tab tabs={tabs} />
    </div>
  );
}

export default TabButtons;
