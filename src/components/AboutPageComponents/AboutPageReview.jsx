"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaQuoteRight } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import Container from "../UI/Container/Container";

const AboutPageReview = () => {
  return (
    <div className="my-20">
      <Container>
        <div data-aos="fade-up" className="mx-auto text-center">
          <h2 className="mb-8 mt-5 text-4xl font-medium md:text-5xl md:font-semibold lg:mb-10 lg:leading-tight">
            What our <span className="text-blue-500">client say</span> <br />{" "}
            about us
          </h2>
        </div>

        <Marquee>
          {/* reviews  */}
          <div className="mx-10 max-w-[400px]">
            <div className="relative w-full space-y-5 rounded-md bg-gray-900 p-10">
              <ReactStars
                className="flex items-center gap-1"
                edit={false}
                value={3}
                count={5}
                size={24}
                activeColor="#ff9533"
              />
              <p className="text-my-p">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam accumsan dui quam, id aliquet lacus suscipit et proin
                vestibulum.&quot;
              </p>
              <div className="flex items-center gap-5 px-3">
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
                <FaQuoteRight className="text-7xl text-gray-800" />
              </div>
            </div>
          </div>
          <div className="mx-10 max-w-[400px]">
            <div className="relative w-full space-y-5 rounded-md bg-gray-900 p-10">
              <ReactStars
                className="flex items-center gap-1"
                edit={false}
                value={3}
                count={5}
                size={24}
                activeColor="#ff9533"
              />
              <p className="text-my-p">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam accumsan dui quam, id aliquet lacus suscipit et proin
                vestibulum.&quot;
              </p>
              <div className="flex items-center gap-5 px-3">
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
                <FaQuoteRight className="text-7xl text-gray-800" />
              </div>
            </div>
          </div>
          <div className="max-w-[400px] lg:mx-10">
            <div className="relative w-full space-y-5 rounded-md bg-gray-900 p-10">
              <ReactStars
                className="flex items-center gap-1"
                edit={false}
                value={3}
                count={5}
                size={24}
                activeColor="#ff9533"
              />
              <p className="text-my-p">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam accumsan dui quam, id aliquet lacus suscipit et proin
                vestibulum.&quot;
              </p>
              <div className="flex items-center gap-5 px-3">
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
                <FaQuoteRight className="text-7xl text-gray-800" />
              </div>
            </div>
          </div>
        </Marquee>
      </Container>
    </div>
  );
};

export default AboutPageReview;
