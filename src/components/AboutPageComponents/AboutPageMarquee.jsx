import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Container from "../UI/Container/Container";

const AboutPageMarquee = ({ children, className, ...props }) => {
  return (
    <div className={cn("my-20", className)} {...props}>
      <Marquee className="overflow-y-hidden">
        <Image className="border-2 border-gray-900 py-10 px-20 h-[150px] object-contain " src={`/assets/images/AboutPage/about-marquee-1.png`} height={150} width={400} alt="about-marque-img" />
        <Image className="border-2 border-gray-900 py-10 px-20 h-[150px] object-contain " src={`/assets/images/AboutPage/about-marquee-2.png`} height={150} width={400} alt="about-marque-img" />
        <Image className="border-2 border-gray-900 py-10 px-20 h-[150px] object-contain " src={`/assets/images/AboutPage/about-marquee-3.png`} height={150} width={400} alt="about-marque-img" />
        <Image className="border-2 border-gray-900 py-10 px-20 h-[150px] object-contain " src={`/assets/images/AboutPage/about-marquee-4.png`} height={150} width={400} alt="about-marque-img" />
        <Image className="border-2 border-gray-900 py-10 px-20 h-[150px] object-contain " src={`/assets/images/AboutPage/about-marquee-5.png`} height={150} width={400} alt="about-marque-img" />
        <Image className="border-2 border-gray-900 py-10 px-20 h-[150px] object-contain " src={`/assets/images/AboutPage/about-marquee-6.png`} height={150} width={400} alt="about-marque-img" />
        <Image className="border-2 border-gray-900 py-10 px-20 h-[150px] object-contain " src={`/assets/images/AboutPage/about-marquee-3.png`} height={150} width={400} alt="about-marque-img" />
      </Marquee>
    </div>
  );
};

export default AboutPageMarquee;
