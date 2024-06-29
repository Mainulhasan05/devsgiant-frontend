"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Container from "../UI/Container/Container";

const ContactPageGetStartBanner = () => {
  return (
    <Container className="relative lg:!mb-24 lg:!px-14">
      <div
        data-aos="fade-up"
        className="relative mx-auto h-full max-w-screen-2xl bg-[url('https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65dd59c44cc9afdcd9a45876_About%20One%20Contact%20Banner.webp')] bg-cover bg-center bg-no-repeat py-10 transition-all duration-200"
      >
        <div className="relative z-10 flex items-center justify-between px-5 text-left">
          <div className="relative mx-auto py-20 text-center lg:w-[600px] lg:text-left">
            <h3 className="section-gradient-title text-lg">Get started now</h3>
            <h1 className="pb-5 pt-4 text-3xl font-medium md:text-4xl lg:font-semibold lg:leading-tight">
              Let&apos;s start <span className="text-blue-500">something</span>{" "}
              amazing together!
            </h1>
          </div>
          <div className="hidden max-w-fit border-l border-gray-500 p-10 py-20 text-white lg:mx-10 lg:block">
            <h3 className="mb-3 text-xl font-medium">Our main office</h3>
            <p className="text-my-p">410 Sandtown, california 94001, USA</p>
          </div>
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-70"></div>
      </div>

      {/* dot light  */}
      <Image
        className="absolute -left-40 top-0"
        src={
          "https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65b72034e6086fb0624a2e8a_Glow%20One.svg"
        }
        height={600}
        width={600}
        alt="bg-light"
      />
    </Container>
  );
};

export default ContactPageGetStartBanner;
