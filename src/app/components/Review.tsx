import React, { useState } from "react";

const Review = (props: any) => {
  const [showFullText, setShowFullText] = useState(false);
  const MAX_LENGTH = 250; // Maximum characters to display initially

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const truncatedText = props.review.review.slice(0, MAX_LENGTH);
  const displayText = showFullText ? props.review.review : truncatedText;

  return (
    <div className="border rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{props.review.customer}</h3>
      <p className="text-gray-600">{displayText}</p>
      {props.review?.review?.length > MAX_LENGTH && (
        <button className="text-blue-500 underline mt-2" onClick={toggleText}>
          {showFullText ? "Read Less" : "Read More"}
        </button>
      )}
      <div className="mt-4 flex items-center">
        <span className="text-yellow-500">Rating: {props.review.score}/5</span>
      </div>
    </div>
  );
};

export default Review;
