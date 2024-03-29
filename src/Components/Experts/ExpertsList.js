import React from "react";
import placeHolderImage from "../../assets/images/person_placeholder.png";

export default function ExpertsList({ expert }) {
  
  return (
    <div className="bg-indigo-700 self-end rounded-xl transition-shadow hover:shadow-2xl">
      <div>
        <img
          className="w-full h-90 rounded-tr-xl rounded-tl-xl object-cover"
          src={expert.picture ? expert.picture : placeHolderImage}
          alt="expert"
        />
      </div>
      <div className="p-2 text-center text-white text-xl uppercase">
        {expert.name}
      </div>
    </div>
  );
}
