import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Education } from "../../../typings";
import { urlFor } from "../../../sanity";

type Props = {
  education: Education;
};

const EducationCard = ({ education }: Props) => {
  return (
    <article className="w-full bg-black/25 py-5 px-10 flex flex-col rounded-lg items-center sm:space-y-5 flex-shrink-0 sm:w-[400px] md:w-[500px] xl:w-[600px] sm:mt-12 snap-center  cursor-pointer transition-opacity duration-200 overflow-hidden mt-10">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        src={urlFor(education?.educationImage).url()}
        alt="education-logo"
        className={"w-28 h-28 mb-10 sm:mb-0 rounded-full"}
      />

      <div className={"px-0 md:px-10 space-y-5 sm:space-y-2"}>
        <h4 className={"text-xl sm:text-2xl sm:font-light"}>
          {education.educationTitle}
        </h4>
        <p className="font-bold sm:text-xl mt-1">{education.instituteTitle}</p>
        <div className="flex space-x-2 my-2"></div>
        <p className="sm:py-2 text-gray-400">
          {education.dateStart}-
          {education.isCurrentlyEducationHere ? "now" : education.dateEnd}
        </p>
        <p>CGPA : {education.CGPA}</p>
      </div>
    </article>
  );
};

export default EducationCard;
