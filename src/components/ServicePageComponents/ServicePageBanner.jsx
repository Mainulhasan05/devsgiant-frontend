import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Container from "../UI/Container/Container";

const ServicePageBanner = () => {
  return (
    <div className="relative m-0 h-full bg-[url('https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65e6a818cb4a6951177f917a_Service%20Two%20Hero%20Banner.webp')] bg-cover bg-center bg-no-repeat">
      <Container className="!flex flex-col items-center justify-between py-5 md:py-10 lg:flex-row lg:justify-around lg:py-20">
        <div className="lg:w-[60%]">
          <h3 className="section-gradient-title text-center text-lg lg:text-left">
            Envision the future, enabled by AI
          </h3>
          <h2 className="mb-8 mt-5 text-center text-4xl font-medium md:text-6xl lg:mb-10 lg:text-left lg:font-semibold lg:leading-tight">
            Designing the <span className="text-blue-500">future,</span> one
            byte at a time powered by AI
          </h2>
        </div>

        <div className="group mb-5 max-w-fit cursor-pointer rounded-full border border-white p-3 transition-all duration-300 hover:bg-gray-500 hover:bg-opacity-100 lg:mb-0">
          <IoIosArrowRoundForward className="text-4xl text-white transition-all duration-300 group-hover:text-white lg:text-6xl" />
        </div>
      </Container>
    </div>
  );
};

export default ServicePageBanner;
