import React from "react";
import Hero from "../Components/Hero";
import Cards from "../Components/Card/Cards";
import Intro from "../Components/Intro";
import ServicesIntro from "../Components/Services/ServicesIntro"
import ExpertsIntro from "../Components/Experts/ExpertsIntro"

export default function Body() {
  return (
    <div>
      <Hero />
      <Cards />
      <Intro />
      <ServicesIntro/>
      <ExpertsIntro/>
    </div>
  );
}
