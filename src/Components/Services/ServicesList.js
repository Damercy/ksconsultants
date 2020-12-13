import React from "react";
import services from "./Services";

/*

<div class="flex space-x-20 p-10 cursor-default">
        <div class="transform -skew-y-6 text-justify text-center text-white my-16">
          <ul class="space-y-2 tracking-tighter">
            <li>
              <i class="fas fa-check-circle mr-2"></i>Working at height &
              scaffold safety.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Safety at confined pace.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Safety in material
              handling.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Work permit/LOTOTO.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Electrical safety.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Workplace back injury
              prevention & Ergonomics.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Behavior based safety at
              workplace.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Road safety.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Safety Induction Training
              for new entrant.
            </li>
          </ul>
        </div>
        <div class="transform -skew-y-6 text-justify text-center text-white my-10">
          <ul class="space-y-2 tracking-tighter">
            <li>
              <i class="fas fa-check-circle mr-2"></i>Fire safety & fire
              prevention.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Emergency Response
              Management & Mock drill.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Legal requirements in
              safety.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Hazard identification &
              risk assessment.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Process safety management.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>General safety
              appreciation for Workers.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Motivating employees.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>General Safety
              appreciation for Officers.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Safety Philosophy &
              Performance Measurement.
            </li>
          </ul>
        </div>
        <div class="transform -skew-y-6 text-justify text-center text-white">
          <ul class="space-y-2 tracking-tighter">
            <li>
              <i class="fas fa-check-circle mr-2"></i>Gas safety.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Job Safety Analysis
              ,Capturing near Misses , &Tool box talk
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Machine guarding, hand
              tools & portable power tools safety.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Personal Protective
              Equipment.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>First Aid & CPR with
              practical demonstration.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Housekeeping , Waste
              Management & 5 S
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Management of COVID-19
              Safety measures & SOP at work places.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Effective communication.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Accident causation Model &
              prevention strategy.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Chemical safety including
              handling of hazardous chemicals which are stored and used in
              industry concerned.
            </li>
            <li>
              <i class="fas fa-check-circle mr-2"></i>Protecting employees from
              heat stress & heat acclimatization training.
            </li>
          </ul>
        </div>
      </div>

*/

export default function ServicesList({margin}) {
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
