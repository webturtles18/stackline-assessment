import React from "react";

export default function ErrorCard(props: any) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 bg-white rounded-lg shadow-xs md:p-10 p-2">
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">Danger alert!</span> {props.message}
        </div>
      </div>
    </div>
  );
}
