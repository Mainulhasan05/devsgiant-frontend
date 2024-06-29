"use client";
import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";

const ContactPageFAQSection = () => {
  const [isOpen, setIsOpen] = useState(0);
  const accordionsData = [
    {
      title: "How can I get started with your AI services?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum metus eu tincidunt laoreet. Proin sit amet maximus eros. Proin imperdiet enim vitae dapibus tincidunt. Cras tincidunt eget lorem sit amet porta.",
    },
    {
      title: "What industries do you specialize in?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum metus eu tincidunt laoreet. Proin sit amet maximus eros. Proin imperdiet enim vitae dapibus tincidunt. Cras tincidunt eget lorem sit amet porta.",
    },
    {
      title: "How does AI play a role in your design process?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum metus eu tincidunt laoreet. Proin sit amet maximus eros. Proin imperdiet enim vitae dapibus tincidunt. Cras tincidunt eget lorem sit amet porta.",
    },
    {
      title: "What makes your AI design agency different?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum metus eu tincidunt laoreet. Proin sit amet maximus eros. Proin imperdiet enim vitae dapibus tincidunt. Cras tincidunt eget lorem sit amet porta.",
    },
  ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <Container>
      <div className="mx-5 grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-14">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-5 lg:items-start lg:gap-8"
        >
          <h2 className="text-center text-4xl font-medium md:text-5xl lg:text-left lg:font-semibold lg:leading-tight">
            Frequently asked <span className="text-indigo-500">questions </span>
          </h2>
          <p className="mb-5 text-center text-my-p lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan dui quam, id aliquet lacus suscipit et. Proin vestibulum
            metus eu tincidunt laoreet. Proin sit amet maximus eros.
          </p>
          <Button className="bg-indigo-600 font-semibold">
            Contact us today
          </Button>
        </div>
        <div className="mx-auto rounded-lg bg-[url('https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65b72034e6086fb0624a2e8a_Glow%20One.svg')] bg-cover bg-center bg-no-repeat">
          {accordionsData.map((PerAccordion, idx) => (
            <div
              data-aos="fade-up"
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
      </div>
    </Container>
  );
};

export default ContactPageFAQSection;
