import React from "react";
import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
  return (
    <div className="my-20">
      <Marquee className="overflow-y-hidden">
        <h1 className="text-5xl font-bold text-gray-600 md:text-7xl">
          * SMART AI * SMART AI * SMART AI * SMART AI * SMART AI * SMART AI *
          SMART AI * SMART AI * SMART AI * SMART AI * SMART AI * SMART AI{" "}
        </h1>
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
