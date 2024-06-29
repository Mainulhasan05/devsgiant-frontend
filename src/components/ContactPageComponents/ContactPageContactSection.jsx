import Image from "next/image";
import React from "react";
import Container from "../UI/Container/Container";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactPageContactSection = () => {
  return (
    <Container>
      <div data-aos="fade-up" className="relative lg:pt-10">
        <h1 className="mx-auto pb-5 pt-4 text-center text-4xl font-medium md:text-6xl lg:w-1/2 lg:font-semibold lg:leading-tight">
          Have an idea? let&apos;s work{" "}
          <span className="text-[#4c5cf0]">together</span>
        </h1>
        <Image
          className="absolute left-10 top-14 hidden lg:block"
          src="/assets/images/Home other imgaes/half-circle.png"
          alt="hero-img-r"
          height={75}
          width={75}
        />
      </div>
      {/* contact div  */}
      <div className="mx-5 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <ContactInfo />
        <ContactForm />
      </div>
    </Container>
  );
};

export default ContactPageContactSection;
