import React from "react";
import Container from "../UI/Container/Container";

const AboutPageSection5 = () => {
  return (
    <Container>
      <div
        data-aos="fade-up"
        className="mx-auto my-20 space-y-5 lg:max-w-[70%]"
      >
        <div className="flex justify-around">
          <div className="relative flex flex-1 items-center justify-center">
            <p className="text-8xl font-semibold text-gray-900 md:text-9xl lg:font-bold">
              200
            </p>
            <p className="absolute text-lg font-medium">Projects</p>
          </div>
          <div className="my-5 border-gray-700 md:border-r"></div>
          <div className="relative flex flex-1 items-center justify-center">
            <p className="text-8xl font-semibold text-gray-900 md:text-9xl lg:font-bold">
              80
            </p>
            <p className="absolute text-lg font-medium">People</p>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="relative flex flex-1 items-center justify-center">
            <p className="text-8xl font-semibold text-gray-900 md:text-9xl lg:font-bold">
              10
            </p>
            <p className="absolute text-lg font-medium">Years</p>
          </div>
          <div className="my-5 border-gray-700 md:border-r"></div>
          <div className="relative flex flex-1 items-center justify-center">
            <p className="text-8xl font-semibold text-gray-900 md:text-9xl lg:font-bold">
              200
            </p>
            <p className="absolute text-lg font-medium">Offices</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPageSection5;
