import React, { useState } from "react";
import "./StarRating.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <>
      {" "}
      <h1>Star Rating Component</h1>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <span
              key={index}
              className={`star ${
                ratingValue <= (hover || rating) ? "hovered" : ""
              }`}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
