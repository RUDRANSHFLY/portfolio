import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "../../../typings";
import { urlFor } from "../../../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const SkillCard = ({ directionLeft, skill }: Props) => {
  return (
    <motion.div
      className={"relative flex cursor-pointer"}
      initial={{
        opacity: 0,
        x: directionLeft ? -100 : 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <div
        className={
          "w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20  xl:w-24 xl:h-24"
        }
      >
        <Image
          src={urlFor(skill.skillImage).url()}
          fill
          className={"absolute rounded-sm transition duration-300 ease-in-out"}
          alt="skill"
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;
