"use client";
import Container from "@/components/UI/Container/Container";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const HomePolicy = () => {
  const textRef = useRef();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     const textElement = textRef.current;
  //     const offsetTop = textElement.offsetTop;
  //     const offsetHeight = textElement.offsetHeight;
  //     const windowHeight = window.innerHeight;

  //     // Calculate the middle point of the screen
  //     const middlePoint = scrollTop + windowHeight / 2;

  //     // Check if the middle point is within the text element
  //     if (middlePoint >= offsetTop && middlePoint <= offsetTop + offsetHeight) {
  //       const distanceFromCenter = Math.abs(middlePoint - (offsetTop + offsetHeight / 4));
  //       const maxDistance = windowHeight / 4;
  //       const scrollPercent = 1 - distanceFromCenter / maxDistance;
  //       textElement.style.color = `rgba(255, 255, 255, ${scrollPercent})`;
  //     } else {
  //       textElement.style.color = "rgba(255, 255, 255, 0.1)";
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <Container className="!mx-auto !my-0">
      <div className="mt-20 px-5">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className={"container mb-5"}
        >
          <h1 className="mx-auto pb-2 text-center text-4xl font-medium capitalize md:text-4xl lg:max-w-[72%] lg:font-semibold lg:leading-tight">
            Consideration for scalability and the ability to handle larger data
            sets and increased computational demands
          </h1>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {/* card-1  */}
          <div
            data-aos="zoom-in-right"
            ata-aos-duration="3000"
            className="group"
          >
            <div className="flex flex-col items-center justify-start gap-5 pb-8 pt-5 sm:mx-auto md:flex-row md:items-start">
              <div>
                <Image
                  className="rounded-md"
                  src="/assets/images/HomePolicy/ethical-ai-design.png"
                  alt="ethical-ai-design.png"
                  height={80}
                  width={80}
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-lg font-semibold lg:text-xl">
                  Decentralized Apps
                </h3>
                <p className="text-base text-slate-400">
                  We build web3 applications that are decentralized and secure.
                </p>
              </div>
            </div>
            <div className="border-animation w-full border-b-2 border-gray-300"></div>
          </div>
          {/* card-2  */}
          <div data-aos="zoom-in-up" ata-aos-duration="3000" className="group">
            <div className="flex flex-col items-center justify-start gap-5 pb-8 pt-5 sm:mx-auto md:flex-row md:items-start">
              <div>
                <Image
                  className="rounded-md"
                  src="/assets/images/HomePolicy/algorithm-design.png"
                  alt="algorithm-design"
                  height={80}
                  width={80}
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-lg font-semibold lg:text-xl">
                  Business Software
                </h3>
                <p className="text-base text-slate-400">
                  We build custom business software that is tailored to your
                  needs.
                </p>
              </div>
            </div>
            <div className="border-animation w-full border-b-2 border-gray-300"></div>
          </div>
          {/* card-3  */}
          <div
            data-aos="zoom-in-left"
            ata-aos-duration="3000"
            className="group"
          >
            <div className="flex flex-col items-center justify-start gap-5 pb-8 pt-5 sm:mx-auto md:flex-row md:items-start">
              <div>
                <Image
                  className="rounded-md"
                  src="/assets/images/HomePolicy/data-visualization.png"
                  alt="data-visualization.png"
                  height={80}
                  width={80}
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-lg font-semibold lg:text-xl">
                  Enterprise Solution
                </h3>
                <p className="text-base text-slate-400">
                  We build enterprise solutions that are scalable and secure.
                </p>
              </div>
            </div>
            <div className="border-animation w-full border-b-2 border-gray-300"></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePolicy;
