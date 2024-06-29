import Image from "next/image";
import React from "react";
import a from "../../../public/assets/images/AboutPage/about-image1.webp";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";

const AboutPageSection2 = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between gap-10 px-10 lg:flex-row lg:gap-16">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-5 lg:w-1/2 lg:items-start lg:gap-6"
        >
          <h2 className="text-center text-4xl font-medium md:text-5xl lg:text-left lg:font-semibold lg:leading-tight">
            Where <span className="text-indigo-500">impossible </span>
            meets reality
          </h2>
          <p className="text-center text-base text-my-p lg:text-left lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan dui quam, id aliquet lacus
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="text-3xl font-medium md:text-4xl lg:font-semibold">
                200+
              </div>
              <div className="text-lg text-my-p md:max-w-[89px]">
                Project completed
              </div>
            </div>
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="text-3xl font-medium md:text-4xl lg:font-semibold">
                212+
              </div>
              <div className="text-lg text-my-p md:max-w-[89px]">
                Clients satisfied
              </div>
            </div>
          </div>
          <Button className="bg-indigo-600 font-semibold">About us</Button>
        </div>
        <div className="relative max-h-[680px] lg:w-1/2">
          <img
            className="mr-auto max-h-[680px] rounded-md"
            src="/assets/images/AboutPage/about-image1.webp"
            alt="AboutUs img"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutPageSection2;
