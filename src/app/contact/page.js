"use client";
import AboutPageMarquee from "@/components/AboutPageComponents/AboutPageMarquee";
import ContactPageContactSection from "@/components/ContactPageComponents/ContactPageContactSection";
import ContactPageFAQSection from "@/components/ContactPageComponents/ContactPageFAQSection";
import ContactPageGetStartBanner from "@/components/ContactPageComponents/ContactPageGetStartBanner";
import React, { useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-hidden">
      <ContactPageContactSection />
      <AboutPageMarquee />
      <ContactPageFAQSection />
      <ContactPageGetStartBanner />
    </div>
  );
};

export default ContactPage;
