import React from "react";

export default function ServicesList({margin,services}) {
  return (
    <div className={`transform -skew-y-6 text-justify text-center text-white ${margin}`}>
      <ul className="space-y-2 tracking-tighter">
        {services.map((service) => (
          <li>
            <i className="fas fa-check-circle mr-2"></i>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}
