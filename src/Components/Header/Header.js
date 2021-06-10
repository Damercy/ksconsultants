import React from "react";

export default function Header({ headerText, subHeaderText, gradient }) {
  console.log(headerText);
  if (gradient)
    return (
      <div className="flex flex-col h-72 items-center justify-end">
        <h1 className="font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          {headerText}
        </h1>
        <h6 className="text-xl p-2 text-gray-600 tracking-tight font-light pb-16">{subHeaderText}</h6>
      </div>
    );
  else
    return <h1 className="p-5 text-dark pt-64 font-semibold ">{headerText}</h1>;
}
