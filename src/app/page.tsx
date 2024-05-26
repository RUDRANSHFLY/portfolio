import About from "@/components/hero/About";
import Education from "@/components/hero/Education";
import Hero from "@/components/hero/Hero";
import NavBar from "@/components/nav/NavBar";
import Skils from "@/components/skills/Skils";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden">
      <NavBar />
      <section id="mainHero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="education" className="snap-center">
        <Education />
      </section>
      <section id="skills" className="snap-center">
        <Skils />
      </section>
    </div>
  );
}
