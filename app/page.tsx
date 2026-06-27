import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Values } from "@/components/Values";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="focus-ring fixed left-4 top-4 z-[60] -translate-y-20 rounded-md bg-teal-300 px-4 py-2 text-sm font-bold text-stone-950 transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
