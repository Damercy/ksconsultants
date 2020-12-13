import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-gray-100 shadow-lg">
      <nav className="flex flex-row">
        <div className="p-5 flex-1 text-2xl">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h1 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              K S Consultant
            </h1>
          </NavLink>
        </div>
        <div className="p-5">
          <div className="flex my-1 sm:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-filter-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
              />
            </svg>
          </div>
          <ul className="flex-row space-x-8 my-1 text-gray-500 hidden sm:flex">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <li className="hover:text-gray-700">Home</li>
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-gray-700"
              style={{ textDecoration: "none" }}
            >
              <li className="hover:text-gray-700">Who we are</li>
            </NavLink>
            <NavLink
              to="/services"
              activeClassName="text-gray-700"
              style={{ textDecoration: "none" }}
            >
              <li className="hover:text-gray-700">Our services</li>
            </NavLink>
            <NavLink
              to="/profile"
              activeClassName="text-gray-700"
              style={{ textDecoration: "none" }}
            >
              <li className="hover:text-gray-700">Our experts</li>
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="text-gray-700"
              style={{ textDecoration: "none" }}
            >
              <li className="hover:text-gray-700">Contact us</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}
