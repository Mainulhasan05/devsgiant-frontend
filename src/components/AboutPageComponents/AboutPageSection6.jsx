"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";

const AboutPageSection6 = () => {
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
        className="relative mx-auto hidden h-full max-w-screen-2xl bg-[url('https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65dd59c44cc9afdcd9a45876_About%20One%20Contact%20Banner.webp')] bg-cover bg-center bg-no-repeat py-20 transition-all duration-200 lg:block"
      >
        <div className="relative z-10 mx-auto px-5 py-10 text-center lg:w-[600px]">
          <div className="relative">
            <Image
              className="relative -left-7 top-6"
              src="/assets/images/Home other imgaes/arrow.png"
              alt="hero-img-r"
              height={50}
              width={50}
            />
            <h1 className="pb-5 pt-4 text-4xl font-semibold">
              Where human ingenuity meets technological superiority
            </h1>
          </div>
          <p className="text-lg text-my-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan dui quam, id aliquet lacus suscipit et proin .
          </p>
          <div className="mt-5 space-x-5">
            <Button className="whitespace-nowrap bg-blue-600" type="block">
              Contact us today
            </Button>
          </div>
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-70"></div>
      </div>
      {/* for small screen */}
      <div className="relative mx-auto block h-full max-w-screen-2xl bg-[url('https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65dd59c44cc9afdcd9a45876_About%20One%20Contact%20Banner.webp')] bg-cover bg-center bg-no-repeat py-20 transition-all duration-200 lg:hidden">
        <div className="relative z-10 mx-auto px-5 py-8 text-center">
          <h1 className="pb-5 pt-4 text-3xl font-medium">
            Where human ingenuity meets technological superiority
          </h1>
          <p className="text-base text-my-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan dui quam, id aliquet lacus suscipit et proin .
          </p>
          <div className="mt-5 space-x-5">
            <Button className="whitespace-nowrap bg-indigo-600" type="block">
              Contact us today
            </Button>
          </div>
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-70"></div>
      </div>
    </>
  );
};

export default AboutPageSection6;
