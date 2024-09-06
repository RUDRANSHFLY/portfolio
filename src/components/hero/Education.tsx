"use client";

import MaxWidthWrapper from "@/helper/ui/MaxWidthWrapper";
import React from "react";
import EducationCard from "../cards/EducationCard";
import { Education } from "../../../typings";

type Props = {
  education: Education[];
};

const HellaEducation = ({ education }: Props) => {
  return (
    <div
      className={
        "h-screen w-screen relative flex flex-col justify-center items-center text-left md:flex-row   mx-auto"
      }
    >
      <h3 className={"heroTitle"}>Education</h3>
      <div
        className="w-screen
         p-10 flex sm:justify-center space-x-5 snap-x snap-mandatory overflow-x-scroll overflow-y-hidden  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500 "
      >
        {education.map((education) => (
          <EducationCard education={education} key={education._id} />
        ))}
      </div>
    </div>
  );
};

export default HellaEducation;
