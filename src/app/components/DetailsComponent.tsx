import React from "react";

const DetailsComponent = (props: any) => {
  return (
    <div className="max-w-md mx-auto bg-white p-4">
      <h2 className="text-lg font-semibold mb-2">Product Details</h2>
      {props.details?.length ? (
        <ul className="list-disc pl-4">
          {props.details.map((detail: any, index: number) => (
            <li key={index} className="text-gray-600">
              {detail}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailsComponent;
