import Container from "@/components/UI/Container/Container";
import Image from "next/image";
import React from "react";
import { BsCheck2 } from "react-icons/bs";

const WhatWeDo = () => {
  return (
    <Container
      className={
        "relative !mx-auto !my-0 h-full bg-[url('https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65b72034e6086fb0624a2e8a_Glow%20One.svg')] bg-cover bg-center bg-no-repeat pt-20"
      }
    >
      <Image
        className="absolute left-5 top-10 hidden lg:block"
        src="/assets/images/Home other imgaes/line-l2.png"
        alt="hero-img-r"
        height={100}
        width={100}
      />
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="mx-auto text-center lg:w-[60%]"
      >
        <h3 className="section-gradient-title text-lg">What We Create</h3>
        <h2 className="mb-10 mt-5 text-4xl font-medium capitalize md:text-5xl lg:font-semibold lg:leading-tight">
          Crafting <span className="text-indigo-500">futures</span> where Design
          and Logic converge
        </h2>
      </div>

      <div className="flex flex-wrap-reverse items-center justify-center gap-6 lg:flex-nowrap">
        <div className="pr-3 lg:w-1/2 lg:pl-20">
          {/************ cards *********/}
          <div className="group flex flex-col items-center gap-6 rounded-md p-8 transition-all duration-300 hover:bg-white hover:bg-opacity-10 lg:flex-row lg:items-start">
            <div className="max-w-fit cursor-pointer rounded-full bg-white bg-opacity-20 p-2 transition-all duration-300 hover:bg-indigo-500 hover:bg-opacity-100 group-hover:bg-indigo-500">
              <BsCheck2 className="text-2xl text-indigo-500 transition-all duration-300 group-hover:text-white" />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold lg:text-xl">
                Mobile & Web App Development
              </h3>
              <p className="pt-2 text-slate-400">
                We develop highly secure and scalable applications.
              </p>
            </div>
          </div>
          <div className="group flex flex-col items-center gap-6 rounded-md p-8 transition-all duration-300 hover:bg-white hover:bg-opacity-10 lg:flex-row lg:items-start">
            <div className="max-w-fit cursor-pointer rounded-full bg-white bg-opacity-20 p-2 transition-all duration-300 hover:bg-indigo-500 hover:bg-opacity-100 group-hover:bg-indigo-500">
              <BsCheck2 className="text-2xl text-indigo-500 transition-all duration-300 group-hover:text-white" />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold lg:text-xl">SAAS Product</h3>
              <p className="pt-2 text-slate-400">
                We forge SaaS marvels that boast both security and scalability
                at their core.
              </p>
            </div>
          </div>
          <div className="group flex flex-col items-center gap-6 rounded-md p-8 transition-all duration-300 hover:bg-white hover:bg-opacity-10 lg:flex-row lg:items-start">
            <div className="max-w-fit cursor-pointer rounded-full bg-white bg-opacity-20 p-2 transition-all duration-300 hover:bg-indigo-500 hover:bg-opacity-100 group-hover:bg-indigo-500">
              <BsCheck2 className="text-2xl text-indigo-500 transition-all duration-300 group-hover:text-white" />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold lg:text-xl">
                Decentralized Application
              </h3>
              <p className="pt-2 text-slate-400">
                We engineer decentralized applications that stand tall on
                pillars of security and scalability.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="relative max-h-[680px] lg:w-1/2"
        >
          <img
            className="mr-auto max-h-[680px] rounded-md"
            src="/assets/images/Home other imgaes/robort.webp"
            alt="AboutUs img"
          />
        </div>
      </div>
    </Container>
  );
};

export default WhatWeDo;
