import React, { Fragment } from "react";

const tapeTexts = [
  { id: 1, label: "Construction & Development" },
  { id: 2, label: "Building & Range Since 2007" },
];

const Tape1 = () => {
  return (
    <section className="border-b border-[#DCDCDC]">
      <div className="flex gap-4 font-space-grotesk font-bold flex-nowrap overflow-clip pl-4">
        {[...new Array(10)].map((_, index) => (
          <Fragment key={index}>
            {tapeTexts.map(({ id, label }) => (
              <div key={id} className="text-nowrap text-sm border-r py-2 pr-3">
                {label}
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Tape1;
