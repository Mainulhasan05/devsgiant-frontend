import Container from "@/components/UI/Container/Container";
import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const AboutUs = () => {
  return (
    <Container className="">
      <div className="relative flex h-full flex-wrap-reverse items-center gap-12 bg-[url('https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65b72034e6086fb0624a2e8a_Glow%20One.svg')] bg-cover bg-center bg-no-repeat py-32 lg:flex-nowrap">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="relative max-h-[680px] lg:w-1/2"
        >
          <img
            className="ml-auto max-h-[680px] rounded-md"
            src="/assets/images/Home other imgaes/AboutUs.webp"
            alt="AboutUs img"
          />
          <div className="absolute bottom-10 right-0">
            <div className="flex max-w-max items-center gap-3 rounded-l-md bg-indigo-400 px-8 py-5">
              <h2 className="text-5xl font-semibold">Lets</h2>
              <div>
                <p>Get</p>
                <p>Started</p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="pr-3 lg:w-1/2 lg:pr-20"
        >
          <div>
            <div className="mb-5 flex items-center justify-center gap-5 lg:justify-start">
              <div className="hidden w-24 border-b border-gray-300 lg:block"></div>
              <h3 className="section-gradient-title text-lg">About Us</h3>
            </div>
            <h2 className="mb-5 text-center text-4xl font-medium capitalize md:text-5xl lg:text-left lg:font-semibold lg:leading-tight">
              Redefining the realm of{" "}
              <span className="text-indigo-600">possible</span> with Latest
              Tech.
            </h2>
            <p className="text-slate-400">
              Solving your business problems with the latest technology. We are
              a team of experts in Blockchain Development, Mobile, Web & Desktop
              Application Development. We are here to help you with your
              business problems.
            </p>
          </div>

          {/************ cards *********/}
          <div className="my-8 flex items-start gap-6">
            <div className="max-w-fit cursor-pointer rounded-full bg-white bg-opacity-20 p-1 transition-all duration-300 hover:bg-indigo-500 hover:bg-opacity-100">
              <IoIosArrowRoundForward className="text-3xl" />
            </div>
            <div>
              <h3 className="pb-1 text-lg font-medium lg:text-xl lg:font-semibold">
                Blockchain Development
              </h3>
              <p className="text-slate-400">
                We build decentralized applications that are secure and
                scalable.
              </p>
            </div>
          </div>
          <div className="my-8 flex items-start gap-6">
            <div className="max-w-fit cursor-pointer rounded-full bg-white bg-opacity-20 p-1 transition-all duration-300 hover:bg-indigo-500 hover:bg-opacity-100">
              <IoIosArrowRoundForward className="text-3xl" />
            </div>
            <div>
              <h3 className="pb-1 text-lg font-medium lg:text-xl lg:font-semibold">
                Software Development
              </h3>
              <p className="text-slate-400">
                We build custom software that is tailored to your business
                needs.
              </p>
            </div>
          </div>
        </div>
        <Image
          className="absolute -bottom-20 right-0 hidden overflow-hidden lg:block"
          src="/assets/images/Home other imgaes/line-r2.png"
          alt="hero-img-r"
          height={100}
          width={100}
        />
      </div>
    </Container>
  );
};

export default AboutUs;
