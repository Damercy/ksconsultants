import React,{useEffect} from "react";
import ServicesIntro from "../Components/Services/ServicesIntro";
import Header from "../Components/Header/Header";
import ServicesOutro from "../Components/Services/ServicesOutro";

export default function ServicesOffered() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header
        gradient={true}
        headerText="Services"
        subHeaderText="People say that accidents are due to human error, which is like saying falls are due to gravity"
      />
      <ServicesIntro bgColor="bg-green-600" />
      <ServicesOutro />
    </>
  );
}
