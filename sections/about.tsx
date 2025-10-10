import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="pt-16 lg:pt-20 pb-12 lg:pb-16 px-5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex h-full">
            <Image
              src="/about_2.png"
              alt="Men on a construction site"
              className="aspect-video object-cover"
              width={595}
              height={428}
            />
          </div>
          <div className="py-4">
            <span className="eyebrow">about us</span>
            <h2 className="mt-4 font-space-grotesk">
              Our company is ready to solve solutions into change
            </h2>
            <p className="mt-6 text-sm">
              At Huantume, our primary goal is to turn challenges into solutions and drive
              positive change, by meeting the evolving needs of our clients and the
              industries we serve.
            </p>
            <Button variant="outline" className="mt-8">
              READ MORE
              <ArrowRight className="text-orange-600" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
