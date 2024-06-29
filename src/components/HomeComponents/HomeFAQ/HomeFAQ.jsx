"use client";
import Container from "@/components/UI/Container/Container";
import Image from "next/image";
import React, { useState } from "react";

const HomeFAQ = () => {
  const [isOpen, setIsOpen] = useState(0);
  const accordionsData = [
    {
      title: "What is Decentralized Application (DApp)?",
      description:
        "A Decentralized Application, or DApp, is a type of software application that operates on a decentralized network, such as a blockchain. Unlike traditional applications that run on centralized servers controlled by a single entity, DApps leverage the distributed nature of blockchain technology, which means they run on multiple nodes within the network. This decentralized architecture offers several benefits, including increased security, transparency, and resistance to censorship. DApps typically have built-in smart contracts that automate certain functions and interactions, providing users with a trustless environment for various activities, such as financial transactions, gaming, social networking, and more.",
    },
    {
      title: "How we do we work with clients to develop DApps?",
      description:
        "We collaborate closely with clients to develop customized DApps, from initial consultation to deployment and beyond. Our process involves thorough planning, design, development, testing, and ongoing support, ensuring the final product meets your objectives while prioritizing security, scalability, and user experience.",
    },
    {
      title: "What support do you offer for Software Development?",
      description:
        "We provide comprehensive support for software development projects, including consulting, design, development, testing, deployment, and maintenance. Our team of experts has extensive experience in a wide range of technologies and industries, allowing us to deliver high-quality solutions tailored to your specific needs. Whether you need a custom web or mobile application, a blockchain-based solution, or assistance with legacy system modernization, we have the skills and expertise to help you succeed. Contact us today to learn more about our software development services and how we can support your project.",
    },
    {
      title: "What industries can benefit from DevsGiant's services?",
      description:
        "DevsGiant's services are designed to benefit a wide range of industries, including finance, healthcare, real estate, supply chain, gaming, and more. Our team of experts has experience working with clients in various sectors, allowing us to deliver customized solutions that address specific industry challenges and requirements. Whether you need a secure and scalable blockchain solution, a user-friendly mobile application, or a custom software platform, we have the skills and expertise to help you succeed. Contact us today to learn more about how DevsGiant can support your industry and business goals.",
    },
  ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <Container className={"relative"}>
      <Image
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="absolute -top-10 left-5 hidden lg:block"
        src="/assets/images/Home other imgaes/line-l3.png"
        alt="hero-img-r"
        height={60}
        width={60}
      />
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="mx-auto my-14 text-center lg:w-[60%]"
      >
        <h2 className="text-4xl font-medium capitalize md:text-5xl lg:font-semibold lg:leading-tight">
          Frequently asked <span className="text-indigo-500">questions</span>
        </h2>
      </div>

      {/* faq Container  */}
      <div className="mx-auto h-full w-full rounded-lg bg-[url('https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65b72034e6086fb0624a2e8a_Glow%20One.svg')] bg-cover bg-center bg-no-repeat lg:w-[70%]">
        {accordionsData.map((PerAccordion, idx) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            key={idx}
            className="my-3 h-full rounded-md bg-gray-900 bg-[url('https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65b72034e6086fb0624a2e8a_Glow%20One.svg')] bg-cover bg-center bg-no-repeat pl-5"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex h-full w-full items-center justify-between py-5 font-medium text-white dark:text-black"
            >
              <span className="text-lg font-medium text-white lg:text-2xl lg:font-semibold">
                {PerAccordion.title}
              </span>
              <span className="rounded-full p-2">
                <svg
                  className="ml-8 mr-7 shrink-0 fill-[#fff]"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && "!rotate-180"}`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && "!rotate-180"}`}
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out ${isOpen === idx ? "grid-rows-[1fr] pb-5 pt-2 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden lg:leading-7">
                {PerAccordion.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomeFAQ;
