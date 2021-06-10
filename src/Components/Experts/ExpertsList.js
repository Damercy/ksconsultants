import React from "react";

export default function ExpertsList({ expert }) {
  return (
    <div className="bg-indigo-700 rounded-xl transition-shadow hover:shadow-2xl">
      <div>
        <img
          className="w-full h-48 rounded-tr-xl rounded-tl-xl object-cover"
          src={expert.picture}
          alt="expert"
        />
      </div>
      <div className="p-2 text-center text-white text-xl uppercase">
        {expert.name}
      </div>
    </div>
  );
}
