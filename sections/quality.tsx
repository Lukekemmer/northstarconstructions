import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const Quality = () => {
  return (
    <section className="relative mt-12 lg:mt-16 px-5 min-h-[720px] bg-[url('/sketch_building.png')] bg-contain bg-bottom-right bg-no-repeat md:bg-size-[auto_460px] lg:bg-size-[auto_500px] xl:bg-size-[auto_600px]">
      <div className="relative container mx-auto">
        <div className="flex flex-col gap-6">
          <div>
            <p className="eyebrow">Our Quality</p>
            <h2 className="mt-4 max-w-2xl">
              Built on Standards That Stand the Test of Time
            </h2>
          </div>
          <p className="text-sm max-w-lg">
            Quality is at the foundation of everything we build. We follow rigorous
            construction standards, prioritize safety, and use proven materials and
            methods to ensure your project stands the test of time. Our team treats every
            structure like a long-term investment — because it is.
          </p>
          <ul className="flex flex-col gap-2 lg:mt-1.5 *:text-sm list-none *:flex *:gap-2 *:items-center">
            <li>
              <div className="bg-orange-500 size-2" />
              <span>Built with integrity, precision, and durable materials</span>
            </li>
            <li>
              <div className="bg-orange-500 size-2" />
              <span>Safety first for our team, partners, and your investment</span>
            </li>
            <li>
              <div className="bg-orange-500 size-2" />
              <span>Long-lasting results through tested construction methods</span>
            </li>
          </ul>
          <div className="infline-flex">
            <Button variant="outline">
              Contact Us <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
