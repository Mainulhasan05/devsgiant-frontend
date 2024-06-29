import Container from "@/components/UI/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeBlog = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="my-20"
    >
      <Container>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="mx-auto lg:ml-5 lg:w-1/2"
        >
          <div className="l:mb-7 mb-4 flex items-center justify-center gap-5 lg:justify-start">
            <div className="hidden w-24 border-b border-gray-300 lg:block"></div>
            <h3 className="section-gradient-title text-lg capitalize">
              What we do
            </h3>
          </div>
          <h2 className="mb-10 text-center text-4xl font-medium capitalize lg:mb-14 lg:text-left lg:text-5xl lg:font-semibold lg:leading-tight">
            Quotes that you will <span className="text-indigo-500">Love</span>
          </h2>
        </div>
        {/* blogs  */}
        <div className="grid grid-cols-1 items-center justify-between justify-items-center gap-5 md:grid-cols-3">
          {/* single blog  */}
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="relative max-w-[430px]"
          >
            <div className="group relative overflow-hidden">
              <Image
                className="transition-all duration-300 hover:scale-105"
                src="/assets/images/Blog/blog-1.webp"
                alt="algorithm-design"
                height={430}
                width={410}
              />
              {/* <Link
                href="#"
                className="absolute -bottom-56 left-[40%] cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold transition-all duration-300 group-hover:bottom-5"
              >
                View
              </Link> */}
            </div>
            <h3 className="my-5 text-xl font-medium lg:text-xl lg:font-semibold">
              Software development is the art of turning ideas into reality, one
              line of code at a time.
            </h3>
            {/* <p className="absolute left-5 top-5 text-slate-400">May 19, 2024</p> */}
          </div>
          {/* single blog  */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="relative max-w-[430px]"
          >
            <div className="group relative overflow-hidden">
              <Image
                className="transition-all duration-300 hover:scale-105"
                src="/assets/images/Blog/blog-2.webp"
                alt="algorithm-design"
                height={430}
                width={410}
              />
              {/* <Link
                href="#"
                className="absolute -bottom-56 left-[40%] cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold transition-all duration-300 group-hover:bottom-5"
              >
                View
              </Link> */}
            </div>
            <h3 className="my-5 text-xl font-medium lg:text-xl lg:font-semibold">
              In the realm of software development, innovation is our compass,
              and quality is our destination.
            </h3>
            {/* <p className="absolute left-5 top-5 text-slate-400">May 19, 2024</p> */}
          </div>
          {/* single blog  */}
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className="relative max-w-[430px]"
          >
            <div className="group relative overflow-hidden">
              <Image
                className="transition-all duration-300 hover:scale-105"
                src="/assets/images/Blog/blog-3.webp"
                alt="algorithm-design"
                height={430}
                width={410}
              />
              {/* <Link
                href="#"
                className="absolute -bottom-56 left-[40%] cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold transition-all duration-300 group-hover:bottom-5"
              >
                View
              </Link> */}
            </div>
            <h3 className="my-5 text-xl font-medium lg:text-xl lg:font-semibold">
              Crafting software solutions that empower businesses and transform
              industries, one keystroke at a time.
            </h3>
            {/* <p className="absolute left-5 top-5 text-slate-400">May 19, 2024</p> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeBlog;
