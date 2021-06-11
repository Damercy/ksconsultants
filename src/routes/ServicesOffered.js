import React from "react";
import ServicesIntro from "../Components/Services/ServicesIntro";
import Header from "../Components/Header/Header";

export default function ServicesOffered() {
  return (
    <>
      <Header
        gradient={true}
        headerText="Services"
        subHeaderText="People say that accidents are due to human error, which is like saying falls are due to gravity"
      />
      <ServicesIntro bgColor="bg-green-600"/>
    </>
  );
}
