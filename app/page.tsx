import Footer from "@/components/footer";
import About from "@/sections/about";
import MessageFromCEO from "@/sections/ceo-message";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Quality from "@/sections/quality";
import Services from "@/sections/services";
import Stats from "@/sections/stats";
import Tape1 from "@/sections/tape-1";
import Tape2 from "@/sections/tape-2";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <section className="px-5">
        <div className="container mx-auto h-[1px] bg-[#DCDCDC]" />
      </section>
      <Stats />
      <Services />
      <Quality />
      <Projects />
      <Tape1 />
      <MessageFromCEO />
      <Footer />
    </>
  );
}
