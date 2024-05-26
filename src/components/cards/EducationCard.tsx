import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const EducationCard = () => {
  return (
    <article className="w-[400px] px-5 flex flex-col rounded-lg items-center sm:space-y-7 flex-shrink-0 sm:w-[500px] md:w-[600px] xl:w-[900px] sm:mt-12 snap-center xl:opacity-40 xl:hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        src={"/ghost.jpg"}
        alt="education-logo"
        className={"w-32 h-32 mb-10 sm:mb-0 rounded-full"}
      />

      <div className={"px-0 md:px-10 space-y-4 sm:space-y-2"}>
        <h4 className={"sm:text-4xl sm:font-light"}>CEO of GHOST</h4>
        <p className="font-bold sm:text-2xl mt-1">GHOST</p>
        <div className="flex space-x-2 my-2">
          <div className="relative h-10 w-10 rounded-full">
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFa_KSt14fKl9JBEH-Z5GDHoguHVHKVHvEVPm9nSILjw&s"
              }
              fill
              sizes={"100vw,100vh"}
              alt="education-logo"
              className="absolute"
            />
          </div>
          <div className="relative h-10 w-10 rounded-full">
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFa_KSt14fKl9JBEH-Z5GDHoguHVHKVHvEVPm9nSILjw&s"
              }
              fill
              sizes={"100vw,100vh"}
              alt="education-logo"
              className="absolute"
            />
          </div>
          <div className="relative h-10 w-10 rounded-full">
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFa_KSt14fKl9JBEH-Z5GDHoguHVHKVHvEVPm9nSILjw&s"
              }
              fill
              sizes={"100vw,100vh"}
              alt="education-logo"
              className="absolute"
            />
          </div>
        </div>
        <p className="uppercase sm:py-2 text-gray-400">
          Started work :- 1 May - now
        </p>
        <ul className="list-disc sm:space-y-2 ml-5 sm:text-lg">
          <li>Building Sass for Web Security and App Security</li>
          <li>Providing Lock to e-Home</li>
          <li>Cyber-Secyrity is Mvp</li>
          <li>
            Making for all type of electronic devices where it rquire Software
          </li>
        </ul>
      </div>
    </article>
  );
};

export default EducationCard;
