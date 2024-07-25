//? Component Render

import { Footer } from "@/components/footer/Footer"; //
import About from "@/components/hero/About";
import Contact from "@/components/hero/Contact";
import HellaEducation from "@/components/hero/Education";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/hero/Projects";
import NavBar from "@/components/nav/NavBar";
import Skils from "@/components/skills/Skils";

import { Education, PageInfo, Skill, Social } from "../../typings";

// ! fetch API
import { fetchSocials } from "../../util/fetchContact";
import { fetchPageInfo } from "../../util/pageInfo";
import { fetchSkills } from "../../util/fetchSkills";
import { fetchEducation } from "../../util/fetchEducation";

export default async function Home() {
  const soicals: Social[] = await fetchSocials();
  const pageInfos: PageInfo[] = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const education: Education[] = await fetchEducation();

  return (
    <div
      className={
        "bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-500"
      }
    >
      <NavBar socials={soicals} />
      <section id="mainHero" className={"snap-center"}>
        <Hero pageInfo={pageInfos[0]} />
      </section>
      <section id="about" className={"snap-center"}>
        <About pageInfo={pageInfos[0]} />
      </section>
      <section id="education" className={"snap-center"}>
        <HellaEducation education={education} />
      </section>
      <section id="skills" className={"snap-center"}>
        <Skils skills={skills} />
      </section>
      <section id="projects" className={"snap-center"}>
        <Projects />
      </section>
      <section id="contact-us" className={"snap-start"}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
