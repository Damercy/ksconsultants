import React from "react";
import Hero from "../Components/Hero";
import Cards from "../Components/Card/Cards";
import Intro from "../Components/Intro";
import ServicesIntro from "../Components/ServicesIntro"
import ImageSlider from "../Images";

export default function Body() {
  return (
    <div>
      <Hero />
      <Cards />
      <Intro />
      <ServicesIntro/>
    </div>
  );
}
