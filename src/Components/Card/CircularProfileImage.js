import React from "react";

export default function CircularProfileImage({ picture }) {
  return (
    <img
      className="rounded-full h-64 w-64 object-cover transform skew-y-6"
      src={picture}
      alt="Person image"
    />
  );
}