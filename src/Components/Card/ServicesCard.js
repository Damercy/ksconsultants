import React from "react";

export default function ServicesCard({ primaryServiceTitle, services }) {
  return (
    <div className="list-none  bg-gray-300 rounded-xl p-10 shadow-2xl">
      <h4 className="text-lg font-bold p-2">{primaryServiceTitle}</h4>
      {services.map((service) => (
        <li className="">
          <i className="fas fa-check-circle mr-2"></i>
          {service}
        </li>
      ))}
    </div>
  );
}
