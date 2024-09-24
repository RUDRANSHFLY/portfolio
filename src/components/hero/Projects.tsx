"use client";

import MaxWidthWrapper from "@/helper/ui/MaxWidthWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Project } from "../../../typings";
import ProjectCard from "../cards/ProjectCard";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <MaxWidthWrapper className={"max-w-full"}>
      <div
        className={
          "h-screen w-screen relative flex flex-col text-center justify-center md:flex-row items-center z-0"
        }
      >
        <div>
          <h1
            className={
              "absolute w-screen top-28 tracking-widest  sm:tracking-[5px] text-white sm:text-gray-500 text-lg sm:text-2xl uppercase mx-auto"
            }
          >
            Projects
          </h1>
        </div>

        <div
          className={
            " w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollb z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500 "
          }
        >
          {projects.map((project, i) => (
            <ProjectCard project={project} key={i} />
          ))}
        </div>

        <div
          className={
            "w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"
          }
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default Projects;
