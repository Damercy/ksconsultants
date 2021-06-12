import React from "react";
import advisors from "./Advisors";
import ExpertsList from "./ExpertsList";

export default function AdvisorsIntro() {
  return (
    <section class="p-10 bg-indigo-500 transform -skew-y-6 sm:px-32">
      <div className="transform skew-y-6">
        <h3 class="text-center text-4xl px-10 font-bold pb-10 sm:text-left text-white">
          OUR ADVISORS
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8  p-10 text-center">
          {advisors.map((advisor) => (
            <ExpertsList expert={advisor} />
          ))}
        </div>
      </div>
    </section>
  );
}
