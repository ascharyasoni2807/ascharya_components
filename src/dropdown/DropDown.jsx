import React, { useState } from "react";

const Dropdown = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    // onSelect(option);
  };

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="dropdown">
      <select
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="">Select an option</option>
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default Dropdown;
