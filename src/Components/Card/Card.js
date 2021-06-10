import React from "react";

export default function Card({ text, icon }) {
    return (
      <div className="h-60 w-full z-30 bg-gray-300 rounded-xl p-10 shadow-2xl">
        <div>{icon}</div>
        <div>
          <p class="text-xl p-5 text-gray-600">{text}</p>
        </div>
      </div>
    );
}
