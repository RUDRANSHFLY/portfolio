"use client";

import MaxWidthWrapper from "@/helper/ui/MaxWidthWrapper";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../../../typings";
import { urlFor } from "../../../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <MaxWidthWrapper>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className={
          "relative h-screen flex flex-col text-center md:text-left md:flex-row justify-center space-y-10 items-center px-10 mx-auto"
        }
      >
        <h3 className="heroTitle">About</h3>
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="w-48 h-48 sm:w-56 sm:h-56 mt-28 md:mt-0 relative flex-shrink-0 md:w-64 md:h-64 lg:w-[400px] lg:h-[400px]"
        >
          <Image
            src={urlFor(pageInfo?.heroImage).url()}
            fill
            alt={"profile-pic"}
            sizes={"100vw,100vh"}
            className={"rounded-full object-cover md:rounded-xl"}
          />
        </motion.div>
        <div className="space-y-5 px-0 md:px-10">
          <h4 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold font-mono">
            Here is a{" "}
            <span className="underline decoration-red-500">little</span>{" "}
            BackGround
          </h4>
          <p className="text-xs text-balance sm:text-sm md:text-base lg:text-2xl">
            {pageInfo.backgroundInformation}
            <br />
            <span className="font-bold text-center tracking-widest text-amber-400">
              return 0
            </span>
          </p>
        </div>
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default About;
