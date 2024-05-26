"use client";

import MaxWidthWrapper from "@/helper/ui/MaxWidthWrapper";
import React from "react";
import EducationCard from "../cards/EducationCard";

const Education = () => {
  return (
    <MaxWidthWrapper>
      <div
        className={
          "h-screen relative overflow-hidden flex flex-col justify-evenly items-center text-left md:flex-row maz-w-full px-10 mx-auto "
        }
      >
        <h3 className={"heroTitle"}>Education</h3>
        <div className=" absolute top-60 w-full h-full px-5 flex space-x-5 snap-x snap-mandatory overflow-x-scroll overflow-y-hidden">
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
          <EducationCard />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Education;
