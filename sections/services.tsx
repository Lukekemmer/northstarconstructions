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
      "From initial planning to implementation, we ensure that every detail is well controlled, the budget is managed wisely, and the project runs on schedule",
    linkTo: "#",
  },
  {
    id: 2,
    imageIcon: "/gc_icon.png",
    heading: "General Construction",
    description:
      "We provide comprehensive solutions, from planning to implementation, to ensure that every project runs smoothly, on budget and on time",
    linkTo: "#",
  },
  {
    id: 3,
    imageIcon: "/dp_icon.png",
    heading: "Design and Planning",
    description:
      "Our planning team ensures that every detail of the project is well controlled, including monitoring the budget and schedule.  With a combination of brilliant design and careful planning",
    linkTo: "#",
  },
  {
    id: 4,
    imageIcon: "/sc_icon.png",
    heading: "Special Construction",
    description:
      "Our team of experts is skilled at tackling projects that require special handling, such as buildings with unconventional designs, complex layout projects, or projects that require innovative technology and materials",
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
