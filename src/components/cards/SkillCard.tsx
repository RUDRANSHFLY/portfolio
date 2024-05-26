import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
};

const SkillCard = ({ directionLeft }: Props) => {
  return (
    <motion.div
      className={"group relative flex cursor-pointer"}
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

      <div className={"relative w-20 h-20 sm:w-38 sm::h-38"}>
        <Image src={"https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560"} fill className={"absolute p-1 rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"} alt="skill"/>
      </div>
      <div className="absolute opacity-0 group-hover:opacity-80 transistion duration-300 ease-in-out group-hover:bg-white w-20 h-20 sm:w-38 sm::h-38 rounded-full text-center flex justify-center items-center ">
        <div className="flex items-center h-full">
          <p className="xl:text-2xl font-bold text-black opacity-100 ">100%</p>
        </div>
      </div>

    </motion.div>
  );
};

export default SkillCard;
