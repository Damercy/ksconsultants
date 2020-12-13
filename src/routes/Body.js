import React from "react";
import Hero from "../Components/Hero";
import Cards from "../Components/Card/Cards";
import ImageSlider from "../Images";

export default function Body() {
  return (
    <div>
      <Hero />
      <section>
        <Cards/>
      </section>

    </div>
  );
}
