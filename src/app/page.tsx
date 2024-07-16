import { Footer } from "@/components/footer/Footer";
import About from "@/components/hero/About";
import Contact from "@/components/hero/Contact";
import Education from "@/components/hero/Education";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/hero/Projects";
import NavBar from "@/components/nav/NavBar";
import Skils from "@/components/skills/Skils";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  return (
    <div
      className={
        "bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-500"
      }
    >
      <NavBar />
      <section id="mainHero" className={"snap-center"}>
        <Hero />
      </section>
      <section id="about" className={"snap-center"}>
        <About />
      </section>
      <section id="education" className={"snap-center"}>
        <Education />
      </section>
      <section id="skills" className={"snap-center"}>
        <Skils />
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
