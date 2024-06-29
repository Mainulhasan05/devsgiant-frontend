"use client";
import AboutPageBanner from "@/components/AboutPageComponents/AboutPageBanner";
import AboutPageMarquee from "@/components/AboutPageComponents/AboutPageMarquee";
import AboutPageReview from "@/components/AboutPageComponents/AboutPageReview";
import AboutPageSection1 from "@/components/AboutPageComponents/AboutPageSection1";
import AboutPageSection2 from "@/components/AboutPageComponents/AboutPageSection2";
import AboutPageSection3 from "@/components/AboutPageComponents/AboutPageSection3";
import AboutPageSection4 from "@/components/AboutPageComponents/AboutPageSection4";
import AboutPageSection5 from "@/components/AboutPageComponents/AboutPageSection5";
import AboutPageSection6 from "@/components/AboutPageComponents/AboutPageSection6";
import React, { useEffect } from "react";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-[50vh] overflow-hidden bg-[#000212] text-white">
      <AboutPageBanner />
      <AboutPageSection1 />
      <AboutPageMarquee />
      <AboutPageSection2 />
      <AboutPageSection3 />
      <AboutPageSection4 />
      <AboutPageSection5 />
      <AboutPageReview />
      <AboutPageSection6 />
    </div>
  );
};

export default AboutPage;
