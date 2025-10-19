import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="pt-16 lg:pt-20 pb-12 lg:pb-16 px-5" id="about-us">
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
              Let&apos;s build something strong together
            </h2>
            <p className="my-3 text-sm font-bold text-black">
              18+ Years of working experience with global industries
            </p>
            <p className="mt-4 text-sm">
              At <span className="font-bold">North Star Constructions</span>, we are a
              team of experienced builders, engineers, and project managers dedicated to
              delivering reliable, high-quality construction.
            </p>

            <p className="mt-3 text-sm">
              From commercial developments to specialized infrastructure, we bring over
              two decades of hands-on expertise to every project. Our work is grounded in
              safety, precision, and a commitment to excellence.
            </p>
            <Button variant="outline" className="mt-8 group" asChild>
              <Link href="tel:9724602957">
                CONTACT US
                <ArrowRight className="text-orange-600 group-hover:text-white" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
