import React from "react";
import { Jumbotron } from "reactstrap";
import ImageSlider from "../Images";

export default function Body() {
  return (
    <div>
      <Jumbotron className="mt-5 p-5 back">
        <h1 className="text-success mt-md-3" style={{ fontSize: "2.8em" }}>
          K S CONSULTANT
        </h1>
        <p className="lead text-muted">
          Available 24x7 & Committed for quality service{" "}
        </p>
      </Jumbotron>
      <div className="container-fluid">
        <article className="p-5 text-justify lead">
          <p>
            K S Consultant is a safety consultant located in Durgapur, West
            Bengal that is commited for providing quality services all year
            round. We've given numerous trainings to esteemed organizations
            including{" "}
            <span
              className="font-weight-bold"
              style={{
                textDecorationStyle: "dotted",
                textDecorationLine: "underline",
              }}
            >
              Birla Cement
            </span>
            ,{" "}
            <span
              className="font-weight-bold"
              style={{
                textDecorationStyle: "dotted",
                textDecorationLine: "underline",
              }}
            >
              Durgapur Steel Plant
            </span>{" "}
            and many more. Our team consists of esteemed professionals ranging
            from B.E., Doctorate, M.tech, B.Sc. etc. Some eminent personalities
            in the field of Safety & Occupational health are actively associated
            with us.
          </p>
        </article>
        <div>
          <div id="sldr">
            <ImageSlider />
          </div>
          <article className="p-5 text-justify lead">
            <p>
              Our unparalled services have gained us great renown and
              reputation. Checkout what some of our clients have to say!
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
