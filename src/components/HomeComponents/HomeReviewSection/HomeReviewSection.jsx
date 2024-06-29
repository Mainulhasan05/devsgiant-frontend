"use client";
import Container from "@/components/UI/Container/Container";
import React from "react";
import Marquee from "react-fast-marquee";
import ReactStars from "react-rating-stars-component";

const HomeReviewSection = () => {
  return (
    <div className="mt-20">
      <Container>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="mx-auto text-center lg:w-[60%]"
        >
          <h3 className="section-gradient-title text-lg">Our Happy Clients</h3>
          <h2 className="mb-10 mt-5 text-4xl font-medium lg:text-5xl lg:font-semibold lg:leading-tight capitalize">
            What <span className="text-indigo-500">people say</span> about us
          </h2>
        </div>
      </Container>

      <Marquee>
        <div className="max-w-[420px] lg:mx-10">
          <div className="relative w-full space-y-5 rounded-md bg-gray-900 p-10">
            <ReactStars
              className="flex items-center gap-1"
              edit={false}
              value={3}
              count={5}
              size={24}
              activeColor="#ff9533"
            />
            <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, aliquam.&quot;
            </p>
            <div className="absolute -bottom-5 left-10 h-10 w-10 rotate-45 bg-slate-900"></div>
          </div>

          <div className="flex items-center gap-5 py-12 pl-8 pr-5">
            <div>
              <img
                className="h-16 w-16 rounded-full"
                src="https://media.licdn.com/dms/image/D4E03AQEYGYbPwLZcgw/profile-displayphoto-shrink_400_400/0/1709636815606?e=2147483647&v=beta&t=hzIqjHNZ2053KJxTC-5n9zAZAFJ_pWj2QpFpqR20YxY"
                alt=""
              />
            </div>
            <div>
              <h3 className="my-2 text-lg font-medium lg:text-xl lg:font-semibold">
                Kavin Martin
              </h3>
              <p>London, UK</p>
            </div>
          </div>
        </div>
        <div className="max-w-[420px] lg:mx-10">
          <div className="relative w-full space-y-5 rounded-md bg-gray-900 p-10">
            <ReactStars
              className="flex items-center gap-1"
              edit={false}
              value={3}
              count={5}
              size={24}
              activeColor="#ff9533"
            />
            <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, aliquam.&quot;
            </p>
            <div className="absolute -bottom-5 left-10 h-10 w-10 rotate-45 bg-slate-900"></div>
          </div>

          <div className="flex items-center gap-5 py-12 pl-8 pr-5">
            <div>
              <img
                className="h-16 w-16 rounded-full"
                src="https://media.licdn.com/dms/image/D4E03AQEYGYbPwLZcgw/profile-displayphoto-shrink_400_400/0/1709636815606?e=2147483647&v=beta&t=hzIqjHNZ2053KJxTC-5n9zAZAFJ_pWj2QpFpqR20YxY"
                alt=""
              />
            </div>
            <div>
              <h3 className="my-2 text-lg font-medium lg:text-xl lg:font-semibold">
                Kavin Martin
              </h3>
              <p>London, UK</p>
            </div>
          </div>
        </div>
        <div className="max-w-[420px] lg:mx-10">
          <div className="relative w-full space-y-5 rounded-md bg-gray-900 p-10">
            <ReactStars
              className="flex items-center gap-1"
              edit={false}
              value={3}
              count={5}
              size={24}
              activeColor="#ff9533"
            />
            <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, aliquam.&quot;
            </p>
            <div className="absolute -bottom-5 left-10 h-10 w-10 rotate-45 bg-slate-900"></div>
          </div>

          <div className="flex items-center gap-5 py-12 pl-8 pr-5">
            <div>
              <img
                className="h-16 w-16 rounded-full"
                src="https://media.licdn.com/dms/image/D4E03AQEYGYbPwLZcgw/profile-displayphoto-shrink_400_400/0/1709636815606?e=2147483647&v=beta&t=hzIqjHNZ2053KJxTC-5n9zAZAFJ_pWj2QpFpqR20YxY"
                alt=""
              />
            </div>
            <div>
              <h3 className="my-2 text-lg font-medium lg:text-xl lg:font-semibold">
                Kavin Martin
              </h3>
              <p>London, UK</p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default HomeReviewSection;
