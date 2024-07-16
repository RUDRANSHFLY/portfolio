"use client";

import MaxWidthWrapper from "@/helper/ui/MaxWidthWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <MaxWidthWrapper className={"max-w-full"}>
      <div
        className={
          "h-screen relative flex flex-col text-left md:flex-row justify-evenly items-center z-0 pb-20"
        }
      >
        <h1 className={"heroTitle"}>Projects</h1>

        <div
          className={
            "relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500 "
          }
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="mt-20 mb-10 w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-10 items-center justify-center p-10"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: -300,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Image
                  src={
                    "https://st.depositphotos.com/1006269/2498/i/450/depositphotos_24980171-stock-photo-computer-laptop-mobile-phone-and.jpg"
                  }
                  height={400}
                  width={400}
                  alt={"project"}
                />
              </motion.div>
              <div className={"max-w-6xl space-y-5"}>
                <h4 className="sm:text-4xl font-semibold text-center underline decoration-red-400">
                  Case Study of {i + 1} of {projects.length} : UPS Clone
                </h4>
                <p className="text-center text-xs sm:text-lg md:text-left">
                  Netflix 2.0 app that use a Login and Logout Authentication
                  with Gooogle . it had a beautiful Home Screen with all the
                  movies looking just like Netflix . there is also a
                  subscription page where you can see your action monthly
                  subscription and we also use Stripe Payments for the monthly
                  Netflix Subscription
                </p>
              </div>
            </div>
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
