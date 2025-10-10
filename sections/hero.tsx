import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[url('/hero_bg.png')] bg-cover bg-top bg-no-repeat min-h-[800px]flex flex-col pb-20 md:pb-32">
      <div className="md:hidden absolute inset-0 bg-black/30" />
      <Navbar />
      <div className="relative container mx-auto py-24 px-5">
        <div className="flex flex-col gap-6 text-white">
          <h1 className="text-[45px] tracking-[-2.5%] leading-[110%] font-bold font-space-grotesk text-white max-w-lg">
            WE BUILD THE FUTURE WITH CREATIVE WORK CONSTRUCTION
          </h1>
          <p className="max-w-md text-white/90">
            Through our skilled teams and cutting-edge engineering, we create not just
            buildings, but opportunities and progress for future generations.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <Button>
            <span className="">GET IN TOUCH</span>
            <ArrowRight className="text-white" />
          </Button>
          <Button variant="outline" className="text-white border-white">
            WATCH VIDEO
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
