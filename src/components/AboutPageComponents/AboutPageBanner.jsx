import Button from "@/components/UI/Button/Button";
import Container from "@/components/UI/Container/Container";
import Image from "next/image";
import React from "react";

import a from "../../../public/assets/images/AboutPage/arrow-right.png";

const AboutPageBanner = () => {
  return (
    <Container>
      <div className="pt-15 relative mx-auto h-full max-w-screen-2xl bg-[url('https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65bb1303cf2f82fce2c02288_Home%20two%20background%20texture.svg')] bg-cover bg-center bg-no-repeat py-2 pb-20">
        <div className="mx-auto max-w-[900px] px-5 py-10 text-center">
          <h3 className="section-gradient-title text-lg">
            Envision the future, enabled by AI
          </h3>
          <div className="relative">
            <h1 className="pb-5 pt-4 text-4xl font-medium md:text-6xl lg:font-semibold lg:leading-tight">
              Redefining the
              <span className="text-[#4c5cf0]">boundaries </span> of <br />{" "}
              human capability
            </h1>
            <Image
              className="absolute -bottom-8 right-36 hidden lg:block"
              src="/assets/images/AboutPage/arrow-right.png"
              alt="hero-img-r"
              height={50}
              width={50}
            />
          </div>

          <div className="mt-3 lg:mt-5">
            <Button className="whitespace-nowrap bg-indigo-600" type="block">
              Contact us today
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPageBanner;
