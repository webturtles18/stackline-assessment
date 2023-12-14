import React from "react";
import Review from "./Review";

const ReviewSection = (props: any) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      {props.reviews?.length
        ? props.reviews.map((review: any, index: number) => (
            <Review key={index} review={review} />
          ))
        : ""}
    </div>
  );
};

export default ReviewSection;
