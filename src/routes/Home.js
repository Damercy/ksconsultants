import React from "react";
import Hero from "../Components/Home/Hero";
import Cards from "../Components/Card/Cards";
import Intro from "../Components/Home/Intro";
import ServicesIntro from "../Components/Services/ServicesIntro";
import ExpertsIntro from "../Components/Experts/ExpertsIntro";
import AdvisorsIntro from "../Components/Experts/AdvisorsIntro";

export default function Body() {
  return (
    <div>
      <Hero />
      <Cards />
      <Intro />
      <ServicesIntro
        headerText="OUR SERVICES"
        showButton={true}
        bgColor="bg-gray-600"
      />
      <ExpertsIntro />
      <AdvisorsIntro />
    </div>
  );
}
