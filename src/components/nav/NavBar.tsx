"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MaxWidthWrapper from "@/helper/ui/MaxWidthWrapper";
import { motion } from "framer-motion";

type Props = {};

const NavBar = ({}: Props) => {
  return (
    <header id="header" className="sticky top-0 z-50 pt-12 p-5">
      <MaxWidthWrapper className="flex justify-center sm:block">
        <div
          id="mainNav"
          className={"flex items-center justify-between align-baseline"}
        >
          <motion.div
            id="leftSideNav"
            className="flex flex-row space-x-5"
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
          >
            <SocialIcon url={"https://twitter.com/ghost_coder01"} />
            <SocialIcon url={"https://www.instagram.com/ghost_coder01/"} />
            <SocialIcon url={"https://github.com/RUDRANSHFLY"} />
            <SocialIcon url={"https://discord.com/channels/@tornedo."} />
          </motion.div>

          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            id="rightSideNav"
            className="sm:flex flex-row items-center text-gray-400 cursor-pointer justify-between space-x-5 hidden"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
            <p className="uppercase hidden font-extrabold tracking-wider sm:inline-flex text-sm text-gray-400">
              Get In Touch
            </p>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default NavBar;
