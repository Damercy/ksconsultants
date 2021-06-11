import React from "react";
import Header from "../Components/Header/Header";
import expertList from "../Components/Experts/Experts";
import CircularProfileImage from "../Components/Card/CircularProfileImage";

export default function Profiles() {
  return (
    <>
      <Header
        gradient={true}
        headerText="Experts"
        subHeaderText="Meet our team of experts"
      />
      {expertList.map((expert) => (
        <div className="md:flex flex-col md:flex-row p-16 content-center justify-center pb-24 mt-24 sm:my-0 sm:p-32 bg-green-500 transform -skew-y-6 ">
          <CircularProfileImage
            key={expert.name}
            className="flex-auto"
            picture={expert.picture}
          />
          <section
            key={expert.qualifications}
            className="text-white pt-24 flex-auto text-center text-justify self-center p-5 md:px-16 transform skew-y-6"
          >
            <h1 className="text-center text-2xl font-bold">{expert.name}</h1>
            <h6 className="text-center py-5 md:p-5 font-thin text-grey-500">
              {expert.qualifications}
            </h6>
            <p>{expert.description}</p>
          </section>
        </div>
      ))}
    </>
  );
}
