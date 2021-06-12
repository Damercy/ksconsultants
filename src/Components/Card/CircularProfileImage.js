import React from "react";
import placeHolderImage from "../../assets/images/person_placeholder.png";

export default function CircularProfileImage({ picture }) {
  return (
    <img
      className="rounded-full h-64 w-64 object-cover transform skew-y-6"
      src={picture ? picture : placeHolderImage}
      alt="Person image"
    />
  );
}
