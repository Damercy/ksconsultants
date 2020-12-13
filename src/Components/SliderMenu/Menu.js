import React from "react";
import { NavLink } from "react-router-dom";
import MenuItems from "./MenuItems";

export default function Menu({ isHidden }) {
  return (
    <div
      className={`flex flex-col ${isHidden} transition ease-out duration-700`}
    >
      <ul>
        {MenuItems.map((item) => (
          <NavLink className="flex m-5" to={item.link}>
            {item.text}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
