import React from "react";

const statList = [
  {
    id: 1,
    number: 130,
    heading: "Projects Completed",
    description:
      "Residential, commercial, and infrastructure builds successfully delivered on time and within scope",
  },
  {
    id: 2,
    number: 95,
    heading: "On-Time Delivery",
    description: "Demonstrating our strong commitment to schedule and efficiency.",
  },
  {
    id: 3,
    number: 18,
    heading: "Years Experience",
    description: "Decades of trusted construction expertise and technical know-how.",
  },
  {
    id: 4,
    number: 15,
    heading: "Major Partnerships",
    description:
      "Collaborations with architects, developers, and municipalities across the region.",
  },
];

const Stats = () => {
  return (
    <section className="py-12 lg:py-16 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6">
          {statList.map(({ id, number, heading, description }) => (
            <div key={id}>
              <p className="font-space-grotesk text-orange-600 font-bold text-3xl">
                {number}
                {id !== 2 ? "+" : "%"}
              </p>
              <p className="font-bold text-sm text-black uppercase mt-4">{heading}</p>
              <p className="mt-1 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
