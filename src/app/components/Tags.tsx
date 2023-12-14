import React from "react";

export default function Tags(props: any) {
  return (
    <div className="flex flex-wrap -mx-1 -my-1 mb-2">
      {props?.tags?.length
        ? props.tags.map((tag: any, id: number) => (
            <span
              key={id}
              className="bg-gray-100 text-gray-600 text-xs mx-1 my-1 px-2.5 py-0.5 border rounded"
            >
              {tag}
            </span>
          ))
        : ""}
    </div>
  );
}
