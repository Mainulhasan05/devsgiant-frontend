"use client";
import AboutUs from "@/components/HomeComponents/AboutUs/AboutUs";
import Banner from "@/components/HomeComponents/Banner/Banner";
import HeroSection from "@/components/HomeComponents/Hero/HeroSection";
import HomeBlog from "@/components/HomeComponents/HomeBlog/HomeBlog";
import HomeFAQ from "@/components/HomeComponents/HomeFAQ/HomeFAQ";
import HomeMarquee from "@/components/HomeComponents/HomeMarquee/HomeMarquee";
import HomePolicy from "@/components/HomeComponents/HomePolicy/HomePolicy";
import HomeReviewSection from "@/components/HomeComponents/HomeReviewSection/HomeReviewSection";
import Portfolio from "@/components/HomeComponents/Portfolio/Portfolio";
import WhatWeDo from "@/components/HomeComponents/WhatWeDo/WhatWeDo";
import React, { useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#000212] text-white">
      <Banner />
      <HeroSection />
      <HomePolicy />
      <AboutUs />
      <Portfolio />
      <WhatWeDo />
      <HomeReviewSection />
      <HomeFAQ />
      <HomeMarquee />
      <HomeBlog />
    </div>
  );
}
