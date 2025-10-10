import React from "react";

const statList = [
  {
    id: 1,
    number: 1300,
    heading: "Project Completed",
    description: "Hundreds of real projects we completed with our best clients",
  },
  {
    id: 2,
    number: 4600,
    heading: "Happy Customers",
    description:
      "We prioritise our parnert's opinion to produce something extraordinary.",
  },
  {
    id: 3,
    number: 25,
    heading: "Years Experience",
    description: "We've been developing for decades to grow your business",
  },
  {
    id: 4,
    number: 320,
    heading: "Achievements",
    description: "Over hundreds of awards with our super team.",
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
                {number}+
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
