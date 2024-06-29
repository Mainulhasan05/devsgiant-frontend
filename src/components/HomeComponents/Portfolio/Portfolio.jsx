"use client";
import Container from "@/components/UI/Container/Container";
import React, { useState } from "react";

const Portfolio = () => {
  const sliders = [
    {
      img: "https://www.bhmpics.com/downloads/hd-full-moon-wallpaper-/23.fosvgx.jpg",
      title: "Photo_1",
    },
    { img: "https://source.unsplash.com/1200x540/?Spring", title: "Photo_2" },
    {
      img: "https://source.unsplash.com/1200x540/?sea-beach",
      title: "Photo_3",
    },
    { img: "https://source.unsplash.com/1200x540/?Autumn", title: "Photo_4" },
    {
      img: "https://w.forfun.com/fetch/9e/9e83b643e4e7530d49b9ba7f15539b6e.jpeg",
      title: "Photo_5",
    },
  ];
  const [isOpen, setIsOpen] = useState(0);
  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx == idx ? null : idx));
  return (
    <div className="mt-20">
      <Container>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="mx-auto lg:ml-5 lg:w-1/2"
        >
          <div className="mb-7 flex items-center justify-center gap-5 lg:justify-start">
            <div className="hidden w-24 border-b border-gray-300 lg:block"></div>
            <h3 className="section-gradient-title text-lg">Portfolio</h3>
          </div>
          <h2 className="mb-14 text-center text-4xl font-medium lg:text-left lg:text-5xl lg:font-semibold lg:leading-tight capitalize">
            Aesthetics through the lens of{" "}
            <span className="text-indigo-600"> Future Technology </span>
          </h2>
        </div>
      </Container>

      {/* Portfolio images  */}
      <div className="items-center justify-center overflow-hidden md:flex">
        {sliders?.map((slide, idx) => (
          <div
            onMouseEnter={() => handleToggle(idx)}
            key={idx}
            className={`${isOpen == idx ? "opacity-100 md:w-[700px]" : "opacity-70 md:w-[400px]"} relative h-full duration-500 ease-in-out`}
          >
            <img
              className="relative block w-full object-cover shadow-md md:h-[800px]"
              src={slide?.img}
              alt="portfolio-img"
            />
            <h1
              className={`hidden -rotate-90 text-right text-2xl text-white md:block`}
            >
              {slide?.title}
            </h1>
            <h1
              className={`absolute left-1/2 top-1/2 block text-center text-2xl text-white md:hidden`}
            >
              {slide?.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
