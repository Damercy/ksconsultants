import React from "react";

export default function About() {
  return (
    <div className="mt-5 text-center p-5 back">
      <h1 className="text-success font-weight-bold">K S CONSULTANT</h1>
      <h5 className="text-muted">
        Expert team, Dedicated service & Easy availability
      </h5>
      <div className="border-left border-right border-bottom mt-5 text-center">
        <h1 className=" mb-4 bg-success text-white border p-2 shadow">
          VISION
        </h1>
        <div className="text-justify pl-5 pr-5 pt-2">
          <p className="lead">
            To become a leading consultant in India for delivering services to
            industries with a view to
          </p>
          <ul className="list-unstyled">
            <li>
              <p>
                <b>Achieve</b> accident-free production.
              </p>
            </li>
            <li>
              <p>
                <b>Build</b> safety-conscious employees.
              </p>
            </li>
            <li>
              <p>
                <b>Create</b> a culture of safety.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-left border-right border-bottom">
        <h1 className="mt-5 mb-4 bg-success text-white border p-2 shadow">
          MISSION
        </h1>
        <p className="text-justify pl-5 pr-5 pt-2 lead">
          To provide dedicated services (to the client organizations) to create
          trained and competent employees and establish self-sustaining systems
          for preventing industrial accidents,fire & occupational diseases.
        </p>
      </div>
    </div>
  );
}
