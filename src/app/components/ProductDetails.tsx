import React, { useEffect } from "react";
import { useAppSelector } from "../hooks";
import Tags from "./Tags";
import ReviewSection from "./ReviewSection";
import DetailsComponent from "./DetailsComponent";

export default function ProductDetails() {
  const product = useAppSelector((state) => state.product.product);
  useEffect(() => {
    // Set the title of the tab
    const prefix = product?.title ? "Product | " : "Product";
    document.title = prefix + product?.title; // Use the product title or a default title
  }, [product?.title]);

  return (
    <div className="bg-white rounded-lg shadow-xs md:p-10 p-4">
      <div>
        <div>
          <div className="max-w-md mx-auto mb-4 bg-white rounded-xl border shadow-md overflow-hidden">
            <img
              src={product?.image}
              alt={product?.title}
              className="w-48 mx-auto"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{product?.title}</h2>
              <p className="text-gray-600 mb-3">{product?.subtitle}</p>
              <Tags tags={product?.tags} />
              <div className="flex justify-between items-center">
                <p className="text-gray-500">{product?.brand}</p>
                <p className="text-gray-500">{product?.retailer}</p>
              </div>
            </div>
          </div>
          <ReviewSection reviews={product?.reviews} />
          <DetailsComponent details={product?.details} />
        </div>
      </div>
    </div>
  );
}
