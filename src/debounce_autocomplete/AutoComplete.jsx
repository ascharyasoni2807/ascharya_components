import React, { useCallback, useState } from "react";

function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function AutoComplete() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchList = (query) => {
    console.log("calling", query);
    const results = [
      "Apple",
      "Banana",
      "Orange",
      "Mango",
      "Pineapple",
      "Grapes",
    ].filter((item) => item.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((query) => {
      searchList(query);
    }, 500),
    []
  );

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
    debouncedSearch(newValue);
  };

  return (
    <>
      <h1> Auto complete</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Search..."
        />
        <ul>
          {searchResults?.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AutoComplete;
