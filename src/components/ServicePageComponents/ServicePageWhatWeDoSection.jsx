import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";

const ServicePageWhatWeDoSection = () => {
  return (
    <Container className="relative">
      <div className="relative flex flex-wrap-reverse items-center justify-center gap-12 pt-32 lg:flex-nowrap lg:justify-start lg:gap-28">
        <div data-aos="fade-up" className="lg:relative lg:w-1/2">
          <Image
            className="h-auto max-w-full rounded-md object-cover"
            src="/assets/images/ServicePage/Service-Two-Wedo-img.webp"
            alt="AboutUs img"
            width={630}
            height={793}
          />
          <Image
            className="absolute -bottom-72 -right-80 hidden lg:block"
            src={
              "https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65b72034e6086fb0624a2e8a_Glow%20One.svg"
            }
            height={600}
            width={600}
            alt="bg-light"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 lg:w-1/2 lg:items-start lg:gap-8">
          <div data-aos="fade-up">
            <div className="mb-5 flex items-center justify-center gap-5 md:justify-normal">
              <div className="hidden w-24 border-b border-gray-300 md:block"></div>
              <h3 className="section-gradient-title text-lg">What we do</h3>
            </div>
            <h2 className="text-center text-4xl font-medium md:text-5xl lg:text-left lg:font-semibold lg:leading-tight">
              Where <span className="text-indigo-500">impossible</span> meets
              reality
            </h2>
          </div>
          <div className="max-w-[448px] text-my-p" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum
            metus eu tincidunt laoreet.
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-3 text-base lg:text-lg"
          >
            <div className="flex items-center gap-3">
              <GoDotFill size={15} className="text-cyan-400" />{" "}
              <p>Create algorithms</p>
            </div>
            <div className="flex items-center gap-3">
              <GoDotFill size={15} className="text-cyan-400" />{" "}
              <p>Opt for the right platform</p>
            </div>
            <div className="flex items-center gap-3">
              <GoDotFill size={15} className="text-cyan-400" />{" "}
              <p>Train the algorithms</p>
            </div>
          </div>

          <Button className="bg-indigo-600">Get start</Button>
        </div>
      </div>
    </Container>
  );
};

export default ServicePageWhatWeDoSection;
