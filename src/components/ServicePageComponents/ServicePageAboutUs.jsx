import Image from "next/image";
import React from "react";
import { BsCheck2 } from "react-icons/bs";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";
import ServicePageAboutPoints from "./ServicePageAboutPoints";

const ServicePageAboutUs = () => {
  return (
    <Container className="relative !mx-auto !my-0 py-14 lg:py-24">
      <Image
        data-aos="fade-up"
        className="absolute -left-40 -top-20"
        src={
          "https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65b72034e6086fb0624a2e8a_Glow%20One.svg"
        }
        height={600}
        width={600}
        alt="bg-light"
      />
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:justify-start lg:gap-16">
        <div data-aos="fade-up">
          <div className="mb-7 flex items-center justify-center gap-5 lg:justify-start">
            <div className="hidden w-24 border-b border-gray-300 md:block"></div>
            <h3 className="section-gradient-title text-lg">About us</h3>
          </div>
          <h2 className="mb-7 mt-5 max-w-[550px] text-center text-4xl font-medium md:text-5xl lg:text-left lg:font-semibold lg:leading-tight">
            Your journey into the{" "}
            <span className="text-indigo-500">future </span> starts now
          </h2>
          <div className="text-center lg:text-left">
            <Button className="bg-indigo-600 !px-8 font-semibold">
              About us
            </Button>
          </div>
        </div>
        <div data-aos="fade-up" className="">
          <p className="mx-auto max-w-[448px] text-my-p lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum
            metus eu tincidunt laoreet.
          </p>
          {/************ cards *********/}
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-8 lg:grid-cols-1">
            <ServicePageAboutPoints>
              Conversational UI design
            </ServicePageAboutPoints>
            <ServicePageAboutPoints>Creative design</ServicePageAboutPoints>
            <ServicePageAboutPoints>
              Software development
            </ServicePageAboutPoints>
            <ServicePageAboutPoints>Ethical AI design</ServicePageAboutPoints>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServicePageAboutUs;
