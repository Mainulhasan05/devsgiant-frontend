"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const ServicePageGetStartedSection = () => {
  const bgRef = useRef();
  const [width, setWidth] = useState(60);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const rect = bgRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate the scroll progress within the section
        const progress = Math.min(
          Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
          1,
        );

        // Calculate width based on scroll progress
        const newWidth = 60 + progress * 40; // 60% to 100%

        setWidth(newWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* for big screen */}
      <div
        ref={bgRef}
        style={{ width: `${width}%` }}
        className="relative mx-auto mt-10 hidden h-full max-w-screen-2xl items-center justify-between bg-[url('https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65e6a819aa39ba90e6e361e1_Service%20Two%20Started%20Banner.webp')] bg-center bg-no-repeat transition-all duration-200 lg:mt-32 lg:flex"
      >
        <div className="relative z-10 mr-auto px-20 py-20 text-left lg:max-w-[800px]">
          <div className="relative">
            <h3 className="section-gradient-title text-lg">Get started now</h3>
            <h1 className="pb-5 pt-4 text-4xl font-semibold">
              Bridging the gap between science fiction and reality
            </h1>
          </div>
        </div>
        <div className="max-w-fit cursor-pointer rounded-full border border-white p-10 transition-all duration-300 lg:mr-16">
          <FaPlay className="text-3xl text-white" />
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
      </div>
      {/* for large screen */}
      <div className="relative mx-auto mt-10 flex h-full max-w-screen-2xl items-center justify-between bg-[url('https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65e6a819aa39ba90e6e361e1_Service%20Two%20Started%20Banner.webp')] bg-center bg-no-repeat transition-all duration-200 lg:mt-32 lg:hidden">
        <div className="z-10 flex flex-col items-center justify-center gap-6 px-8 py-20">
          <h3 className="section-gradient-title text-center text-lg">
            Get started now
          </h3>
          <h1 className="text-center text-3xl font-medium">
            Bridging the gap between science fiction and reality
          </h1>
          <div className="max-w-fit cursor-pointer rounded-full border border-white p-5 transition-all duration-300">
            <FaPlay className="text-xl text-white" />
          </div>
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
      </div>
    </>
  );
};

export default ServicePageGetStartedSection;
