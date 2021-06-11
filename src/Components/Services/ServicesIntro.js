import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import services from "./Services";
import ServicesList from "./ServicesList";

export default function ServicesIntro({headerText, showButton, bgColor}) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <section className={`p-10 sm:p-32 ${bgColor} transform skew-y-6`}>
      <h3
        id="services"
        className="text-4xl font-bold text-left pb-10 text-white transform -skew-y-6"
      >
        {headerText}
      </h3>
      <article className="text-xl text-justify text-center text-white transform -skew-y-6">
        Your employees learn by examples. If they don’t see you practising good
        safety habits, they won’t think safety is important. This is why we
        curate our services with examples to provide quality training to
        minimize unsafe acts and promote a safe workplace environment. We
        understand that every accident is a notice that something is wrong with
        men, method or material and that is why we first investigate and then
        act. These novel ideas are what help us provide the following quality
        services to your organization:
      </article>
      <div className="grid grid-cols-1 gap-x-14 gap-y-12 sm:gap-y-0 sm:grid-cols-3 gap-4 mt-10 sm:mt-0 cursor-default">
        <ServicesList margin={"sm:mt-20"} services={services.slice(0, 11)} />
        <ServicesList margin={"sm:mt-12"} services={services.slice(11, 21)} />
        <ServicesList
          margin={"sm:mt-3"}
          services={services.slice(21, services.length)}
        />
      </div>
      {
        showButton?
      <div className="text-center mt-10 sm:mt-0">
        <Link to="/services" className="block md:mx-80 transform -skew-y-6 p-5 bg-gradient-to-r from-green-400 to-blue-500  rounded-full hover:bg-gradient-to-r hover:from-green-700 hover:to-blue-700 text-white uppercase focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 ease-in-out hover:scale-110">
          Learn more <i className="fas fa-angle-right"></i>
        </Link>
      </div>:null}
    </section>
  );
}
