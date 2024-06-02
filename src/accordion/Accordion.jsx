// src/App.js
import React, { useState } from "react";
import "./Accordion.css";
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => handleClick(index)}>
            {item.title}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
              {item.subItems && <Accordion items={item.subItems} />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

function AccordionParent() {
  const items = [
    {
      title: "Item 1",
      content: "Content of Item 1",
      subItems: [
        {
          title: "SubItem 1.1",
          content: "Content of SubItem 1.1",
        },
        {
          title: "SubItem 1.2",
          content: "Content of SubItem 1.2",
          subItems: [
            {
              title: "SubItem 1.2.1",
              content: "Content of SubItem 1.2.1",
            },
            {
              title: "SubItem 1.2.2",
              content: "Content of SubItem 1.2.2",
            },
          ],
        },
      ],
    },
    {
      title: "Item 2",
      content: "Content of Item 2",
    },
    {
      title: "Item 3",
      content: "Content of Item 3",
      subItems: [
        {
          title: "SubItem 3.1",
          content: "Content of SubItem 3.1",
        },
        {
          title: "SubItem 3.2",
          content: "Content of SubItem 3.2",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>Nested Accordion Component</h1>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionParent;
