import React from "react";
import Hero from "../Components/Home/Hero";
import Cards from "../Components/Card/Cards";
import Intro from "../Components/Home/Intro";
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