import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { Fragment } from "react";

const projectImages = [
  {
    id: 1,
    src: "/project_1.png",
    alt: "Crane working on skyscraper",
    heading: "Construction Shopping Center",
    description:
      "Mega Mall is a shopping center construction project that includes hundreds of shops, restaurants and entertainment facilities, creating a high-end shopping center. ",
  },
  {
    id: 2,
    src: "/project_2.png",
    alt: "Completed wooden villa",
    heading: "Bridge Construction",
    description:
      "The Harapan Jaya Bridge is an important bridge construction project connecting two previously isolated areas, allowing for easier access and economic growth.",
  },
  {
    id: 3,
    src: "/project_3.png",
    alt: "Diagonal angle of villa",
    heading: "",
    description: "",
  },
  {
    id: 4,
    src: "/project_4.png",
    alt: "Crane working on two sky scrapers",
    heading: "",
    description: "",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#151515] py-24 md:py-32 px-5">
      <div className="container mx-auto">
        <div>
          <p className="eyebrow">Our Project</p>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mt-2">
            <h2 className="text-white max-w-lg">
              Constructions have been successfully completed by our team.
            </h2>
            <div className="max-w-xs">
              <p className="text-white/90 text-sm">
                We are proud of the long-term impact this construction will have on
                society and the industry. a testament to our dedication to quality and our
                mission to build a better future through construction
              </p>
              <div className="hidden lg:inline-flex gap-3 mt-8">
                <Button size="icon">
                  <ArrowLeft />
                </Button>
                <Button size="icon" variant="outline" className="border-white">
                  <ArrowRight className="text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 lg:mt-30 flex gap-6 flex-no-wrap overflow-x-auto hide-scrollbar">
          {projectImages.map(({ id, alt, src }) => (
            <Fragment key={id}>
              <Image
                key={id}
                src={src}
                alt={alt}
                width={545}
                height={545}
                className="aspect-square size-64 lg:size-auto lg:w-[300px] lg:aspect-auto object-cover"
              />
              {/* <div className="lg:hidden flex">
                <p>{heading}</p>
              </div> */}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
