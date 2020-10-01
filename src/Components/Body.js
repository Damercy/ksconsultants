import React from "react";
import { Jumbotron } from "reactstrap";
import ImageSlider from "../Images";

export default function Body() {
  return (
    <div className="bg-light">
      <Jumbotron className="mt-5 p-5 back">
        <h1 className="text-success mt-md-3" style={{ fontSize: "2.8em" }}>
          K S CONSULTANT{" "}
          <span>
            <small style={{ fontSize: "0.5em" }}>
              <p>DURGAPUR</p>
            </small>
          </span>
        </h1>
        <p className="lead text-muted">
          Expert team, Dedicated service & Easy availability
        </p>
      </Jumbotron>
      <div className="container-fluid">
        <div className="text-center p-5">
          <h1 className=" mb-4 text-success">VISION</h1>
          <p className="lead">
            To become a leading consultant in India for delivering services to
            industries with a view to:-
          </p>
          <ol className="list-unstyled">
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
          </ol>
        </div>
        <div className="text-center">
          <h1 className="mb-4 text-success">MISSION</h1>
          <p className="text-justify pl-5 pr-5 pt-2 lead">
            To provide dedicated services (to the client organizations) to
            create trained and competent employees and establish self-sustaining
            systems for preventing industrial accidents,fire & occupational
            diseases.
          </p>
        </div>
        <article className="p-5 text-justify lead">
          <p>
            K S CONSULTANT, a safety consultant located at Durgapur in West
            Bengal, provides all types of services in Industrial Safety &amp;
            occupational health. Our team is comprising of highly experienced
            &amp; expert professionals who are ready to provide services always.
          </p>
        </article>
        <div>
          <div id="sldr shadow">
            <ImageSlider />
          </div>
          <div className="p-5 text-center">
            <h1 className=" mb-4 text-success ">OUR SPECIALITY</h1>
            <p className="text-dark lead text-large">“Expert team, dedicated service &amp; easy availability”</p>
          </div>
        </div>
      </div>
    </div>
  );
}
