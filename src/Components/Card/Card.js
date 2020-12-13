import React from "react";

// flex p-5 space-x-4 text-center flex-row justify-around w-full h-60 my-5

export default function Card({ text, icon }) {
  return (
    <div className="h-60 w-full bg-gray-300 rounded-xl p-10 shadow-2xl">
      <div>{icon}</div>
      <div>
        <p class="text-xl p-5 text-gray-600">{text}</p>
      </div>
    </div>
  );
}
