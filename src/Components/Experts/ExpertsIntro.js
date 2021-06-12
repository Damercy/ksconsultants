import React from "react";
import experts from "./Experts";
import ExpertsList from "./ExpertsList";

export default function ExpertsIntro() {
  return (
    <section class="p-10 bg-indigo-500 transform -skew-y-6 sm:p-32">
      <div>
        <h3
          class="text-4xl font-bold pb-10 text-right text-white transform skew-y-6"
        >
          OUR EXPERTS
        </h3>
        <article class="text-xl text-justify text-center text-white transform skew-y-6">
          We boast a team of highly experienced and qualified professionals.
          Some eminent personalities in the field of safety & occupational
          health are also actively associated with our organization. Rest
          assured, you are in safe hands.
        </article>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8  p-10 text-center  transform skew-y-6">
          {experts.map((expert) => (
            <ExpertsList expert={expert} />
          ))}
        </div>
      </div>
    </section>
  );
}
