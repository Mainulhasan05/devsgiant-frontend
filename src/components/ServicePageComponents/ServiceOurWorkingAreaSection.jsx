import Image from "next/image";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Container from "../UI/Container/Container";

import icon2 from "../../../public/assets/images/ServicePage/ai-icon.svg";
import icon5 from "../../../public/assets/images/ServicePage/algorithm-icon.svg";
import icon1 from "../../../public/assets/images/ServicePage/clock-icon.svg";
import icon4 from "../../../public/assets/images/ServicePage/data-icon.svg";
import icon3 from "../../../public/assets/images/ServicePage/drop-icon.svg";
import icon6 from "../../../public/assets/images/ServicePage/light-icon.svg";

const ServiceOurWorkingAreaSection = () => {
  return (
    <Container className="relative my-10 lg:my-24">
      <Image
        data-aos="fade-up"
        className="absolute -left-52 -top-80 hidden lg:block"
        src={
          "https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65b72034e6086fb0624a2e8a_Glow%20One.svg"
        }
        height={800}
        width={800}
        alt="bg-light"
      />
      <div className="grid grid-cols-2 justify-between gap-3 space-y-5 lg:mx-10 lg:grid-cols-3 lg:gap-10">
        {/* card */}
        <div
          data-aos="fade-up"
          className="mt-3 space-y-3 overflow-hidden bg-[#101222] p-5 lg:mt-5 lg:space-y-5 lg:bg-transparent lg:p-0"
        >
          <Image
            height={60}
            width={60}
            className="h-auto max-w-full"
            src={icon1}
            alt="ai-icon"
          />
          <h3 className="text-lg lg:text-xl lg:font-semibold">Graphicmaker</h3>
          <p className="text-sm text-my-p md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum
            metus eu tincidunt laoreet.
          </p>
          <div className="relative flex w-max cursor-pointer items-center gap-3 transition-all duration-300 hover:left-0 lg:-left-[108px]">
            <p className="text-base font-medium md:text-lg lg:font-semibold">
              Read more
            </p>
            <HiArrowLongRight className="text-4xl !font-thin text-gray-500" />
          </div>
        </div>
        {/* card */}
        <div
          data-aos="fade-up"
          className="space-y-3 overflow-hidden bg-[#101222] p-5 lg:space-y-5 lg:bg-transparent lg:p-0"
        >
          <Image
            height={60}
            width={60}
            className="h-auto max-w-full"
            src={icon2}
            alt="ai-icon"
          />
          <h3 className="text-lg lg:text-xl lg:font-semibold">Intelligent</h3>
          <p className="text-sm text-my-p md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum
            metus eu tincidunt laoreet.
          </p>
          <div className="relative flex w-max cursor-pointer items-center gap-3 transition-all duration-300 hover:left-0 lg:-left-[108px]">
            <p className="text-base font-medium md:text-lg lg:font-semibold">
              Read more
            </p>
            <HiArrowLongRight className="text-4xl !font-thin text-gray-500" />
          </div>
        </div>
        {/* card */}
        <div
          data-aos="fade-up"
          className="space-y-3 overflow-hidden bg-[#101222] p-5 lg:space-y-5 lg:bg-transparent lg:p-0"
        >
          <Image
            height={60}
            width={60}
            className="h-auto max-w-full"
            src={icon3}
            alt="drop-icon"
          />
          <h3 className="text-lg lg:text-xl lg:font-semibold">Color matcher</h3>
          <p className="text-sm text-my-p md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum
            metus eu tincidunt laoreet.
          </p>
          <div className="relative flex w-max cursor-pointer items-center gap-3 transition-all duration-300 hover:left-0 lg:-left-[108px]">
            <p className="text-base font-medium md:text-lg lg:font-semibold">
              Read more
            </p>
            <HiArrowLongRight className="text-4xl !font-thin text-gray-500" />
          </div>
        </div>
        {/* card */}
        <div
          data-aos="fade-up"
          className="space-y-3 overflow-hidden bg-[#101222] p-5 lg:space-y-5 lg:bg-transparent lg:p-0"
        >
          <Image
            height={60}
            width={60}
            className="h-auto max-w-full"
            src={icon4}
            alt="data-icon"
          />
          <h3 className="text-lg lg:text-xl lg:font-semibold">
            Data visualization
          </h3>
          <p className="text-sm text-my-p md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum
            metus eu tincidunt laoreet.
          </p>
          <div className="relative flex w-max cursor-pointer items-center gap-3 transition-all duration-300 hover:left-0 lg:-left-[108px]">
            <p className="text-base font-medium md:text-lg lg:font-semibold">
              Read more
            </p>
            <HiArrowLongRight className="text-4xl !font-thin text-gray-500" />
          </div>
        </div>
        {/* card */}
        <div
          data-aos="fade-up"
          className="space-y-3 overflow-hidden bg-[#101222] p-5 lg:space-y-5 lg:bg-transparent lg:p-0"
        >
          <Image
            height={60}
            width={60}
            className="h-auto max-w-full"
            src={icon5}
            alt="algorithm-icon"
          />
          <h3 className="text-lg lg:text-xl lg:font-semibold">
            Algorithm design
          </h3>
          <p className="text-sm text-my-p md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum
            metus eu tincidunt laoreet.
          </p>
          <div className="relative flex w-max cursor-pointer items-center gap-3 transition-all duration-300 hover:left-0 lg:-left-[108px]">
            <p className="text-base font-medium md:text-lg lg:font-semibold">
              Read more
            </p>
            <HiArrowLongRight className="text-4xl !font-thin text-gray-500" />
          </div>
        </div>
        {/* card */}
        <div
          data-aos="fade-up"
          className="space-y-3 overflow-hidden bg-[#101222] p-5 lg:space-y-5 lg:bg-transparent lg:p-0"
        >
          <Image
            height={60}
            width={60}
            className="h-auto max-w-full"
            src={icon6}
            alt="light-icon"
          />
          <h3 className="text-lg lg:text-xl lg:font-semibold">
            Creative design
          </h3>
          <p className="text-sm text-my-p md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum
            metus eu tincidunt laoreet.
          </p>
          <div className="relative flex w-max cursor-pointer items-center gap-3 transition-all duration-300 hover:left-0 lg:-left-[108px]">
            <p className="text-base font-medium md:text-lg lg:font-semibold">
              Read more
            </p>
            <HiArrowLongRight className="text-4xl !font-thin text-gray-500" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceOurWorkingAreaSection;
