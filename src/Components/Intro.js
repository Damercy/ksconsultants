import React from "react";

export default function Intro() {
  return (
    <section className="pb-24 mt-24 sm:my-0 sm:p-32 bg-green-500 transform -skew-y-6 ">
      <div className="pt-96 sm:py-0">
        <h3
          className="sm:mt-0 mt-32 text-center
            text-4xl font-bold sm:pb-10 sm:text-right text-white transform skew-y-6"
        >
          WHO WE ARE
        </h3>
        <article className="mt-10 sm:mt-0 px-10 sm:px-0 text-xl text-justify text-center text-white transform skew-y-6">
          K S CONSULTANT is a safety consultant located in Durgapur, West Bengal
          which provides all types of services in industrial safety &
          occupational health. Our team comprises of highly experienced & expert
          professionals who are ready to provide services always.
          <br />
          <br />
          Our mission is to provide dedicated services (to the client
          organizations) to create trained and competent employees and establish
          self-sustaining systems for preventing industrial accidents, fire &
          occupational diseases.
        </article>
      </div>
    </section>
  );
}
