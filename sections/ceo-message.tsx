import Image from "next/image";
import React from "react";

const MessageFromCEO = () => {
  return (
    <section className="py-12 lg:py-16 px-5">
      <div className="container mx-auto">
        <div className="mt-6 grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p className="eyebrow">Our CEO</p>
            <h2 className="mt-4">A Message From Our CEO</h2>

            <div className="mt-6 flex flex-col gap-3 max-w-xl *:lg:text-lg">
              <p>Welcome to North Star Constructions</p>
              <p>
                At North Star, we build with purpose, precision, and integrity. What began
                as a small team with a big vision has grown into a trusted name in
                construction and drilling — shaping skylines, powering industries, and
                supporting communities.
              </p>
              <p>
                Our foundation rests on three pillars: safety, quality, and
                sustainability. We see every project as more than a structure — it’s a
                lasting partnership with our clients and communities. By combining
                advanced technology with deep industry expertise, we deliver excellence at
                every stage.
              </p>
              <p>
                Our dedicated team works tirelessly to exceed expectations, embrace
                innovation, and uphold the highest standards. Thank you for trusting North
                Star Constructions to help build a stronger future.
              </p>
              <p>
                Thank you for trusting North Star Constructions as your partner in
                building a stronger future.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex object-cover md:max-w-[400px]">
              <Image
                src="/our_ceo.jpeg"
                alt="Our CEO"
                width={1000}
                height={800}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageFromCEO;
