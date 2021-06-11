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
        subHeaderText="Meet our experts"
      />
      {expertList.map((expert) => (
        <div className="md: flex flex-col md:flex-row p-16 content-center justify-center ">
          <CircularProfileImage
            className="flex-auto"
            picture={expert.picture}
          />
          <section className="flex-auto text-center text-justify self-center p-5 md:p-16">
            <h1 className="text-center">{expert.name}</h1>
            <p>{expert.description}</p>
          </section>
        </div>
      ))}
    </>
  );
}
