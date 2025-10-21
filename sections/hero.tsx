import Navbar from "@/components/navbar";
import QuoteButtonModal from "@/components/quote-button-modal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[url('/hero_bg.png')] bg-cover bg-top bg-no-repeat min-h-[800px]flex flex-col pb-20 md:pb-32">
      <div className="md:hidden absolute inset-0 bg-black/30" />
      <Navbar />
      <div className="relative container mx-auto py-24 px-5">
        <div className="flex flex-col gap-6 text-white">
          <h1 className="text-[45px] tracking-[-2.5%] leading-[110%] font-bold font-space-grotesk text-white max-w-lg">
            Building strength below and above ground
          </h1>
          <p className="max-w-md text-white/90">
            We turn blueprints into enduring landmarks. With expert teams and engineering
            excellence, we build spaces that stand strong for generations.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <QuoteButtonModal label="REQUEST A QUOTE" />
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black"
            asChild
          >
            <Link href="#about-us">Learn more</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
