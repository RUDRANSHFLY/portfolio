"use client";

import MaxWidthWrapper from "@/helper/ui/MaxWidthWrapper";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "../animation/BackGroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../../../typings";
import { urlFor } from "../../../sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi , The Name's ${pageInfo.name}`,
      "Guy-who-loves-Cofee.tsx",
      "who-loves-Tea.jsx",
      "who-loves.Nature.py",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <MaxWidthWrapper>
      <div
        className={
          "h-screen space-y-8 flex flex-col items-center justify-center text-center overflow-hidden"
        }
      >
        <BackGroundCircles />
        <div className="relative h-40 w-40 sm:h-32 sm:w-32 rounded-full mx-auto">
          <Image
            className="absolute rounded-full cursor-pointer object-cover"
            src={urlFor(pageInfo.profilePic).url()}
            alt={"profile Pic"}
            sizes={"100vw,100vh"}
            fill
          />
        </div>
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-200 pb-2 tracking-[10px] px-5 hover:cursor-pointer">
            Software Engineer
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold px-10">
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
        </div>
        <div className="z-20">
          <div>
            <Link href={"#about"}>
              <button type={"button"} className={"heroButton"}>
                About
              </button>
            </Link>
            <Link href={"#education"}>
              <button type={"button"} className={"heroButton"}>
                Education
              </button>
            </Link>
            <Link href={"#skills"}>
              <button type={"button"} className={"heroButton"}>
                Skills
              </button>
            </Link>
            <Link href={"#projects"}>
              <button type={"button"} className={"heroButton"}>
                Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
