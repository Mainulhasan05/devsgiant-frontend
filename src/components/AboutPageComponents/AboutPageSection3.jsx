import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Container from "../UI/Container/Container";

const AboutPageSection3 = () => {
  return (
    <Container className="!my-20">
      <h2
        data-aos="fade-up"
        className="mb-7 mt-5 text-center text-4xl font-medium md:text-5xl lg:font-semibold lg:leading-tight"
      >
        Where human minds meet <br />{" "}
        <span className="text-indigo-500">infinite </span> possibilities
      </h2>

      <div data-aos="fade-up" className="my-20">
        <div className="group cursor-pointer border-y border-gray-600 lg:relative">
          <div className="flex flex-col items-center justify-between border-l-[3px] border-transparent p-5 lg:flex-row lg:p-12 lg:group-hover:border-white">
            <div className="flex items-center justify-between p-5">
              <div>
                <h3 className="mb-4 text-2xl font-medium md:text-3xl lg:mb-5">
                  AI software development
                </h3>
                <p className="text-my-p">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
            <div>
              <Image
                className="-top-14 right-1/4 lg:absolute lg:hidden lg:group-hover:block"
                src={`/assets/images/AboutPage/about-circle.webp`}
                alt="hero-img-r"
                height={320}
                width={320}
              />
            </div>
            <div className="mt-3 max-w-fit cursor-pointer rounded-full bg-gray-900 p-1 transition-all duration-300 group-hover:-rotate-45 group-hover:bg-indigo-500 group-hover:bg-opacity-100 lg:mt-0">
              <IoIosArrowRoundForward className="text-4xl lg:text-5xl" />
            </div>
          </div>
        </div>
        <div className="group cursor-pointer border-b border-gray-600 lg:relative">
          <div className="flex flex-col items-center justify-between border-l-[3px] border-transparent p-5 lg:flex-row lg:p-12 lg:group-hover:border-white">
            <div className="flex items-center justify-between p-5">
              <div>
                <h3 className="mb-4 text-2xl font-medium md:text-3xl lg:mb-5">
                  AI software development
                </h3>
                <p className="text-my-p">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
            <div>
              <Image
                className="-top-14 right-1/4 lg:absolute lg:hidden lg:group-hover:block"
                src={`/assets/images/AboutPage/aobut-mark-group.webp`}
                alt="aobut-mark-group"
                height={320}
                width={320}
              />
            </div>
            <div className="mt-3 max-w-fit cursor-pointer rounded-full bg-gray-900 p-1 transition-all duration-300 group-hover:-rotate-45 group-hover:bg-indigo-500 group-hover:bg-opacity-100 lg:mt-0">
              <IoIosArrowRoundForward className="text-4xl lg:text-5xl" />
            </div>
          </div>
        </div>
        <div className="group cursor-pointer border-b border-gray-600 lg:relative">
          <div className="flex flex-col items-center justify-between border-l-[3px] border-transparent p-5 lg:flex-row lg:p-12 lg:group-hover:border-white">
            <div className="flex items-center justify-between p-5">
              <div>
                <h3 className="mb-4 text-2xl font-medium md:text-3xl lg:mb-5">
                  AI software development
                </h3>
                <p className="text-my-p">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
            <div>
              <Image
                className="-top-14 right-1/4 lg:absolute lg:hidden lg:group-hover:block"
                src={`/assets/images/AboutPage/about-ball.webp`}
                alt="about-circle"
                height={320}
                width={320}
              />
            </div>
            <div className="mt-3 max-w-fit cursor-pointer rounded-full bg-gray-900 p-1 transition-all duration-300 group-hover:-rotate-45 group-hover:bg-indigo-500 group-hover:bg-opacity-100 lg:mt-0">
              <IoIosArrowRoundForward className="text-4xl lg:text-5xl" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPageSection3;
