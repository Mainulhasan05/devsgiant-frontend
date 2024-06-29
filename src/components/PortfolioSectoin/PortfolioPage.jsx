"use client";

import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Container from "../UI/Container/Container";

const PortfolioPage = () => {
  return (
    <Container>
      <div className="relative mb-20 lg:pt-10">
        <h4 className="section-gradient-title my-1 text-center text-lg">
          Envision the future. enabled by AI
        </h4>
        <h1 className="mx-auto pb-5 pt-4 text-center text-4xl font-medium md:text-6xl lg:w-1/2 lg:font-semibold lg:leading-tight">
          Checkout our <span className="text-[#4c5cf0]">latest</span> portfolio
        </h1>
        <Image
          className="absolute bottom-0"
          src={
            "https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65b72034e6086fb0624a2e8a_Glow%20One.svg"
          }
          height={200}
          width={300}
          alt="bg-light"
        />
      </div>

      <div className="relative space-y-12">
        <div className="sticky top-0 mx-auto w-[95%] lg:w-[80%]">
          <Image
            className="w-full"
            src={"/assets/images/Portfolio/portfolio_img1.webp"}
            height={600}
            width={600}
            alt="bg-light"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
          <div className="z-1 absolute left-0 top-0 h-full w-full">
            <div className="ite flex h-full w-full flex-col justify-between p-10">
              <div></div>
              <div className="mx-auto max-w-fit cursor-pointer rounded-full border p-3 transition-all duration-300 hover:-rotate-45 hover:border-indigo-500 hover:bg-indigo-500 hover:bg-opacity-100">
                <IoIosArrowRoundForward className="text-3xl lg:text-5xl" />
              </div>
              <div className="">
                <p>May 21, 2024</p>
                <h3 className="mt-3 text-xl font-medium sm:text-2xl md:text-3xl lg:font-semibold">
                  Where AI meets design, magic happiness
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-0 mx-auto w-[95%] lg:w-[80%]">
          <Image
            className="w-full"
            src={"/assets/images/Portfolio/portfolio_img2.webp"}
            height={600}
            width={600}
            alt="bg-light"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
          <div className="z-1 absolute left-0 top-0 h-full w-full">
            <div className="ite flex h-full w-full flex-col justify-between p-10">
              <div></div>
              <div className="mx-auto max-w-fit cursor-pointer rounded-full border p-3 transition-all duration-300 hover:-rotate-45 hover:border-indigo-500 hover:bg-indigo-500 hover:bg-opacity-100">
                <IoIosArrowRoundForward className="text-3xl lg:text-5xl" />
              </div>
              <div className="">
                <p>May 21, 2024</p>
                <h3 className="mt-3 text-xl font-medium sm:text-2xl md:text-3xl lg:font-semibold">
                  Where AI meets design, magic happiness
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-0 mx-auto w-[95%] lg:w-[80%]">
          <Image
            className="w-full"
            src={"/assets/images/Portfolio/portfolio_img3.webp"}
            height={600}
            width={600}
            alt="bg-light"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
          <div className="z-1 absolute left-0 top-0 h-full w-full">
            <div className="ite flex h-full w-full flex-col justify-between p-10">
              <div></div>
              <div className="mx-auto max-w-fit cursor-pointer rounded-full border p-3 transition-all duration-300 hover:-rotate-45 hover:border-indigo-500 hover:bg-indigo-500 hover:bg-opacity-100">
                <IoIosArrowRoundForward className="text-3xl lg:text-5xl" />
              </div>
              <div className="">
                <p>May 21, 2024</p>
                <h3 className="mt-3 text-xl font-medium sm:text-2xl md:text-3xl lg:font-semibold">
                  Where AI meets design, magic happiness
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PortfolioPage;
