import React from "react";
import { Link } from "react-router-dom";
import ServicesCard from "../Card/ServicesCard";
import servicesDetailed from "./ServicesDetailed";

export default function ServicesOutro() {
  return (
    <div class="p-10 bg-indigo-500 transform -skew-y-6 sm:p-32">
      <div className="transform skew-y-6 grid grid-cols-3 grid-flow-row gap-4 content-center items-center	">
        {servicesDetailed.map((detailedServices) => (
          <ServicesCard
            primaryServiceTitle={detailedServices.servicePrimary}
            services={detailedServices.services}
          />
        ))}
      </div>
      <Link
        to="/contact"
        className="transform skew-y-6 block md:mx-80 mt-16 text-center  p-5 bg-gradient-to-r from-green-400 to-yellow-500  rounded-full hover:bg-gradient-to-r hover:from-green-700 hover:to-blue-700 text-white uppercase focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 ease-in-out hover:scale-110"
      >
        Contact us <i className="fas fa-angle-right"></i>
      </Link>
    </div>
  );
}
