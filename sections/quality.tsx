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
              The quality of the company to support the development process becomes real
            </h2>
          </div>
          <p className="text-sm max-w-lg">
            Through our unwavering commitment to excellence, we have consistently turned
            our promises into action. Our team&apos;s dedication, expertise and innovative
            approach have made it possible to turn aspirations into achievements
          </p>
          <ul className="flex flex-col gap-2 lg:mt-1.5 *:text-sm list-none *:flex *:gap-2 *:items-center">
            <li>
              <div className="bg-orange-500 size-2" />
              <span>Work comfortably and safely</span>
            </li>
            <li>
              <div className="bg-orange-500 size-2" />
              <span>Construction quality that is always monitored</span>
            </li>
            <li>
              <div className="bg-orange-500 size-2" />
              <span>Success for the long term</span>
            </li>
          </ul>
          <div className="infline-flex">
            <Button variant="outline">
              Read More <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
