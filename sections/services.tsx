import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const serviceList = [
  {
    id: 1,
    imageIcon: "/pj_icon.png",
    heading: "Project Management",
    description:
      "Our team oversees every stage of construction with precision — from planning and permitting to execution and delivery. We keep your project on schedule, on budget, and up to the highest quality standards.",
    linkTo: "#",
  },
  {
    id: 2,
    imageIcon: "/gc_icon.png",
    heading: "General Construction",
    description:
      "We build with skill and integrity. Whether it’s a new development, renovation, or structural expansion, our construction services are designed to create lasting value.",
    linkTo: "#",
  },
  {
    id: 3,
    imageIcon: "/dp_icon.png",
    heading: "Design and Planning",
    description:
      "Our design and planning team partners with clients to shape their vision into practical, buildable projects. We integrate architectural creativity with engineering expertise to ensure smooth execution.",
    linkTo: "#",
  },
  {
    id: 4,
    imageIcon: "/sc_icon.png",
    heading: "Specialized Construction",
    description:
      "From structural retrofitting to advanced material solutions, we tackle complex construction challenges that require specialized knowledge and innovative problem-solving.",
    linkTo: "#",
  },
];

const Services = () => {
  return (
    <section className="py-12 md:py-16 px-5">
      <div className="container mx-auto">
        <div>
          <p className="eyebrow">Our Services</p>
          <h2 className="max-w-xl mt-4">We offer transformations that become real</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {serviceList.map(({ id, description, heading, imageIcon, linkTo }) => (
            <div
              key={id}
              className="border border-[#DCDCDC] p-6 min-h-[240px] md:min-h-[320px] flex flex-col justify-between"
            >
              <div>
                <Image src={imageIcon} alt={heading} width={40} height={40} />
                <p className="mt-6 text-black font-bold text-sm uppercase">{heading}</p>
                <p className="mt-2 text-sm">{description}</p>
              </div>
              <div className="mt-10">
                <Link
                  href={linkTo}
                  className="flex items-center gap-2 hover:opacity-80 text-black/80 text-sm font-semibold"
                >
                  READ MORE <ArrowRight className="text-black/80 size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
