import Button from "@/components/UI/Button/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Link from "next/link";

// import a from "../../../../public/assets/images/Home other imgaes/logo.png";

const Banner = ({ children, className, ...props }) => {
  return (
    <div
      data-aos="zoom-in"
      className={cn(
        "relative mx-auto h-full max-w-screen-2xl bg-[url('https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65bb1303cf2f82fce2c02288_Home%20two%20background%20texture.svg')] bg-cover bg-center bg-no-repeat py-2 pb-20 pt-20",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center justify-center gap-4 px-5 py-10 text-center md:gap-6 lg:gap-8">
        <h3 className="section-gradient-title text-lg font-medium">
          Unleash your imagiation
        </h3>
        <div className="relative">
          <h1 className="text-transform: text-4xl font-semibold capitalize md:text-6xl lg:leading-tight">
            Where human <span className="text-[#4c5cf0]">minds meet</span>{" "}
            infinite possibilities
          </h1>
          <Image
            className="absolute -top-9 left-4 hidden lg:block"
            src="/assets/images/Home other imgaes/arrow.png"
            alt="hero-img-r"
            height={50}
            width={50}
          />
        </div>
        <p className="mx-auto max-w-[700px] text-base text-slate-400 lg:text-lg">
          Build something extraordinary with DevsGiant. DevsGiant is your
          passionate team of tech experts, building innovative solutions across
          Web3 and traditional software development. We craft cutting-edge
          dApps, DeFi platforms, and tackle any software challenge with a
          full-stack mastery. Giant thinking meets agile execution, ensuring
          success for your project.
        </p>
        <div className="flex flex-col items-center gap-5 md:flex-row lg:gap-7">
          <Button className="whitespace-nowrap bg-indigo-600" type="block">
            <Link href="/service">Explore our service</Link>
          </Button>
          <Button
            className="bg-transparent bg-white bg-opacity-10"
            type="block"
          >
            Learn more⬇️
          </Button>
        </div>
      </div>
      <Image
        className="absolute left-10 top-0 hidden lg:block"
        src="/assets/images/Home other imgaes/circle.png"
        alt="hero-img-r"
        height={50}
        width={50}
      />
      <Image
        className="absolute bottom-20 left-10 hidden lg:block"
        src="/assets/images/Home other imgaes/line-l1.png"
        alt="hero-img-r"
        height={90}
        width={90}
      />
      <Image
        className="absolute bottom-20 right-10 hidden lg:block"
        src="/assets/images/Home other imgaes/half-circle.png"
        alt="hero-img-r"
        height={90}
        width={90}
      />
    </div>
  );
};

export default Banner;
