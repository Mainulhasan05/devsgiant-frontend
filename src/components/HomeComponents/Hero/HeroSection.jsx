"use client";
import Container from "@/components/UI/Container/Container";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Container>
      {/* for large screen */}
      <div
        data-aos="zoom-in"
        className="relative hidden min-h-[500px] lg:block"
      >
        <div className="z-3 absolute right-1/2 top-9 opacity-75">
          <Image
            className="h-[350px] rounded-md"
            src="/assets/images/HeroSection/hero-img-2.webp"
            alt="hero-img-l"
            height={350}
            width={320}
          />
        </div>
        <div className="absolute left-1/2 top-0 !z-[10] -translate-x-1/2 transform">
          <Image
            className="mx-auto rounded-md"
            src="/assets/images/HeroSection/hero-img-1.webp"
            alt="hero-img-m"
            height={400}
            width={350}
          />
        </div>
        <div className="z-3 absolute left-1/2 top-9 opacity-75">
          <Image
            className="h-[350px] rounded-md"
            src="/assets/images/HeroSection/hero-img-3.webp"
            alt="hero-img-r"
            height={350}
            width={320}
          />
        </div>
        <Image
          className="absolute -bottom-20 right-0"
          src="/assets/images/HeroSection/line2.png"
          alt="hero-img-r"
          height={100}
          width={100}
        />
      </div>
      {/* for small screen */}
      <div className="relative grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-center justify-center justify-items-center gap-[30px] sm:grid-cols-2 sm:grid-rows-[auto_auto_auto] lg:hidden">
        <div className="overflow-hidden">
          <Image
            className="h-auto w-auto rounded"
            src="/assets/images/HeroSection/hero-img-2.webp"
            alt="hero-img-l"
            height={400}
            width={350}
          />
        </div>
        <div className="overflow-hidden">
          <Image
            className="h-auto w-auto rounded"
            src="/assets/images/HeroSection/hero-img-1.webp"
            alt="hero-img-m"
            height={400}
            width={350}
          />
        </div>
        <div className="overflow-hidden">
          <Image
            className="h-auto w-auto rounded"
            src="/assets/images/HeroSection/hero-img-3.webp"
            alt="hero-img-r"
            height={400}
            width={350}
          />
        </div>
        <Image
          className="absolute bottom-5 right-10 hidden overflow-hidden sm:block"
          src="/assets/images/HeroSection/line2.png"
          alt="hero-img-r"
          height={80}
          width={80}
        />
      </div>
    </Container>
  );
};

export default HeroSection;
