import React from "react";
import { Project } from "../../../typings";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "../../../sanity";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div>
      <div className="mt-20 mb-10 w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-10 items-center justify-center p-10">
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
            src={urlFor(project?.image).url()}
            height={200}
            width={200}
            alt={"project"}
          />
        </motion.div>
        <div className={"max-w-6xl space-y-5"}>
          <h4 className="sm:text-4xl font-semibold text-center underline decoration-red-400">
            {project.title}
          </h4>
          <p className="text-center text-xs sm:text-lg md:text-left">
            {project.summary}
          </p>
        </div>
        <div className={"flex gap-5"}>
          <Link href={project.livelink.toString()}>
            <Button variant={"destructive"}>Live Link</Button>
          </Link>
          <Button>Github Code</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
