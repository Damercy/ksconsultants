import React from "react";
import { NavLink } from "react-router-dom";
import MenuItems from "./MenuItems";

export default function Menu({ isHidden }) {
  return (
    <div
      className={`flex flex-col ${isHidden} text-center`}
    >
      <ul className="mt-10">
        {MenuItems.map((item) => (
          <NavLink className="flex p-2 " to={item.link}>
            {item.text}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
