import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Container from "../UI/Container/Container";

const AboutPageSection1 = () => {
  return (
    <Container>
      <div
        data-aos="fade-up"
        className="relative flex flex-col items-center justify-center gap-5 md:flex-row lg:gap-8"
      >
        <div>
          <Image
            src={`/assets/images/AboutPage/head-phone.webp`}
            alt="ai image"
            className="h-auto w-auto rounded"
            height={500}
            width={500}
          />
        </div>
        <div>
          <Image
            src={`/assets/images/AboutPage/robort-face.webp`}
            alt="ai image"
            className="h-auto w-auto rounded"
            height={500}
            width={500}
          />
        </div>
        <div className="absolute -top-8 max-w-fit -rotate-45 cursor-pointer rounded-full bg-gray-900 p-1 transition-all duration-300 group-hover:bg-blue-500 group-hover:bg-opacity-100">
          <IoIosArrowRoundForward className="text-4xl lg:text-5xl" />
        </div>
      </div>
    </Container>
  );
};

export default AboutPageSection1;
