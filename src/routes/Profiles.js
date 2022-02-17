import React,{useEffect} from "react";
import Header from "../Components/Header/Header";
import expertList from "../Components/Experts/Experts";
import advisorList from "../Components/Experts/Advisors";
import CircularProfileImage from "../Components/Card/CircularProfileImage";

export default function Profiles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header
        gradient={true}
        headerText="Experts"
        subHeaderText="Meet our team of experts & advisors"
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
            <h6 className="text-center font-medium py-5 md:p-5 text-grey-500">
              {expert.qualifications}
            </h6>
            <p>{expert.description}</p>
          </section>
        </div>
      ))}
      <div className="transform py-5 -skew-y-6 bg-green-600">
        <h2 className="transform skew-y-6 text-4xl text-center font-bold text-white">
          ADVISORS
        </h2>
      </div>
      {advisorList.map((advisor) => (
        <div className="md:flex flex-col p-16 md:flex-row  content-center justify-center pb-24  sm:my-0 sm:p-24 bg-green-500 transform -skew-y-6 ">
          <CircularProfileImage
            key={advisor.name}
            className="flex-auto"
            picture={advisor.picture}
          />
          <section
            key={advisor.qualification}
            className="text-white pt-24 flex-auto text-center text-justify self-center p-5 md:px-16 transform skew-y-6"
          >
            <h1 className="text-center text-2xl font-bold">{advisor.name}</h1>
            <h6 className="text-center py-5 md:p-5 font-medium text-grey-500">
              {advisor.qualification}
            </h6>
            <p>{advisor.description}</p>
          </section>
        </div>
      ))}
    </>
  );
}
