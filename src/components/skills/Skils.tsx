"use client";

import MaxWidthWrapper from "@/helper/ui/MaxWidthWrapper";
import SkillCard from "../cards/SkillCard";
import { motion } from "framer-motion";
import React from "react";

const Skils = () => {
  return (
    <MaxWidthWrapper className="overflow-y-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={
          "h-screen xl:px-10 xl:space-y-0 relative flex flex-col justify-center items-center text-center md:text-left xl:flex-row "
        }
      >
        <h3 className={"heroTitle"}>Skills</h3>

        <h3
          className={
            "absolute top-44 uppercase tracking-[3px] text-slate-400 text-balance sm:text-gray-500 text-sm"
          }
        >
          Hover over a skill for currency profieciency
        </h3>

        <div
          className={"absolute top-64 grid grid-cols-3 sm:grid-cols-4 gap-5"}
        >
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default Skils;
