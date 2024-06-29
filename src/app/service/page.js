"use client";
import AboutPageMarquee from "@/components/AboutPageComponents/AboutPageMarquee";
import ServiceOurWorkingAreaSection from "@/components/ServicePageComponents/ServiceOurWorkingAreaSection";
import ServicePageAboutUs from "@/components/ServicePageComponents/ServicePageAboutUs";
import ServicePageBanner from "@/components/ServicePageComponents/ServicePageBanner";
import ServicePageGetStartedSection from "@/components/ServicePageComponents/ServicePageGetStartedSection";
import ServicePageNumberSection from "@/components/ServicePageComponents/ServicePageNumberSection";
import ServicePageWhatWeDoSection from "@/components/ServicePageComponents/ServicePageWhatWeDoSection";
import React, { useEffect } from "react";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

const ServicePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-[50vh] overflow-hidden">
      <ServicePageBanner />
      <AboutPageMarquee className={"!-mt-10 !mb-0"} />
      <ServicePageAboutUs />
      <ServicePageNumberSection />
      <ServicePageWhatWeDoSection />
      <ServicePageGetStartedSection />
      <ServiceOurWorkingAreaSection />
    </div>
  );
};

export default ServicePage;
