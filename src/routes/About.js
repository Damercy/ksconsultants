import React,{useEffect} from "react";
import Header from "../Components/Header/Header";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header
        headerText="K S CONSULTANT"
        subHeaderText="Available 24x7 &  Committed for quality service"
        gradient={true}
      />
      <div className="md:flex">
        <div className="flex-auto p-5 m-5 z-30 bg-gray-300 rounded-xl p-10 shadow-2xl">
          <div>
            <h6 className="text-center text-2xl font-bold tracking-wide text-green-500">
              MISSION
            </h6>
            <p class="text-xl  text-center text-justify">
              Provide dedicated services to the client organizations to create
              trained and competent employees and establish self-sustaining
              systems for preventing industrial accidents, fire & occupational
              diseases.
            </p>
          </div>
        </div>
        <div className="flex-auto p-5 m-5  z-30 bg-gray-300 rounded-xl p-10 shadow-2xl">
          <div>
            <h6 className="text-center text-center text-2xl font-bold tracking-wide text-green-500">
              VISION
            </h6>
            <p class="text-xl  text-center text-justify">
              To become a leading consultant in India for delivering services to
              industries with a view to achieve accident-free production, build
              safety-conscious employees & a culture of safety.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
