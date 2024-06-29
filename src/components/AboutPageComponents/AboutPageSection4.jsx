import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";

const AboutPageSection4 = () => {
  return (
    <Container>
      <div className="my-10 flex flex-wrap-reverse items-center justify-center gap-12 lg:flex-nowrap lg:justify-start">
        <div data-aos="fade-up" className="relative lg:w-1/2">
          <Image
            className="h-auto max-w-full rounded-md object-cover"
            src="/assets/images/AboutPage/about-image-2.webp"
            alt="AboutUs img"
            width={519}
            height={619}
          />
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center gap-5 lg:w-1/2 lg:items-start lg:gap-8"
        >
          <h2 className="text-center text-4xl font-medium md:text-5xl lg:text-left lg:font-semibold lg:leading-tight">
            Your journey into the{" "}
            <span className="text-indigo-500">future </span> starts now
          </h2>
          <p className="max-w-[448px] text-my-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum
            metus eu tincidunt laoreet.
          </p>

          <div className="flex flex-col gap-3 text-base lg:text-lg">
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

export default AboutPageSection4;
