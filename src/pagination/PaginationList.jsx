import React, { useState } from "react";
import ReactDOM from "react-dom";

const PaginatedComponent = ({ text }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const linesPerPage = 2;

  // Split the text into lines
  const lines = text
    .split(". ")
    .map(
      (line, index) =>
        `${line}${index !== text.split(". ").length - 1 ? "." : ""}`
    );

  // Calculate the indices of the first and last lines on the current page
  const indexOfLastLine = currentPage * linesPerPage;
  const indexOfFirstLine = indexOfLastLine - linesPerPage;
  const currentLines = lines.slice(indexOfFirstLine, indexOfLastLine);

  // Logic for displaying page numbers
  const totalPages = Math.ceil(lines.length / linesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div style={{ whiteSpace: "pre-wrap" }}>
        {currentLines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

const PaginationList = () => {
  const longParagraph =
    "The interviewer introduced himself and asked for my introduction. After that he quickly jumped to the question which was to write a polyfill of groupBy function provided by lodash. I was able to come up with an approach after taking 4-5 minutes and explained him. He seemed satisfied and I started coding it. While coding I made some syntactical issues but he did not mind it as he knew already that I am not used to JS syntax for quite long. He asked a lot of follow-up questions on that and wanted me to use dynamic object key assignment. He was very helpful and supportive. One follow-up question was what if we wanted to have this groupBy function available as object's in-built method itself. There were couple of questions on hoisting in JS, call, apply and bind, some questions on axios, how to make responsive UI, service workers, closures in JS (this is the fav topic of all JS interviewers). All rounds were eliminating and I was selected for the next round with mixed reviews (due to syntax issues in my code).";

  return (
    <div>
      <h1>Paginated Paragraph</h1>
      <PaginatedComponent text={longParagraph} />
    </div>
  );
};

export default PaginationList;
