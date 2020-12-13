import React from "react";

export default function ServicesIntro() {
  return (
    <section class="p-10 bg-gray-600 transform skew-y-6 p-32">
      <h3
        id="services"
        class="text-4xl font-bold text-left pb-10 text-white transform -skew-y-6"
      >
        OUR SERVICES
      </h3>
      <article class="text-xl text-justify text-center text-white transform -skew-y-6">
        Your employees learn by examples. If they don’t see you practising good
        safety habits, they won’t think safety is important. This is why we
        curate our services with examples to provide quality training to
        minimize unsafe acts and promote a safe workplace environment. We
        understand that every accident is a notice that something is wrong with
        men, method or material and that is why we first investigate and then
        act. These novel ideas are what help us provide the following quality
        services to your organization:
      </article>
        <ServicesList/>
      <div class="text-center">
        <button class="transform -skew-y-6 p-5 bg-gradient-to-r from-green-400 to-blue-500  rounded-full hover:bg-gradient-to-r hover:from-green-700 hover:to-blue-700 text-white uppercase focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition duration-200 ease-in-out hover:scale-110">
          Learn more <i class="fas fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
}
