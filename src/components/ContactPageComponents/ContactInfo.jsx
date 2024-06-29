import Image from "next/image";
import React from "react";
import locationSVG from "../../../public/assets/images/Contact/location.svg";
import phoneSVG from "../../../public/assets/images/Contact/phone.svg";
import smsSVG from "../../../public/assets/images/Contact/sms.svg";

const ContactInfo = () => {
  return (
    <div className="relative rounded-sm bg-gray-900 p-5 md:p-10">
      <h3 className="mb-10 text-2xl font-medium">
        Let&apos;s stay connected with us
      </h3>

      <div className="flex items-center justify-start gap-5 border-t border-gray-500 pb-8 pt-5 sm:mx-auto">
        <div className="rounded-md bg-gray-800 px-4 py-3 lg:rounded-xl">
          <Image
            height={20}
            width={20}
            className=""
            src={locationSVG}
            alt="locationSVG"
          />
        </div>
        <div>
          <p className="text-my-p">410 Sandtown, California 94001, USA</p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-5 border-t border-gray-500 pb-8 pt-5 sm:mx-auto">
        <div className="rounded-md bg-gray-800 px-4 py-3 lg:rounded-xl">
          <Image
            height={20}
            width={20}
            className=""
            src={smsSVG}
            alt="smsSVG"
          />
        </div>
        <div>
          <p className="text-my-p">info@example.com</p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-5 border-t border-gray-500 pb-8 pt-5 sm:mx-auto">
        <div className="rounded-md bg-gray-800 px-4 py-3 lg:rounded-xl">
          <Image
            height={20}
            width={20}
            className=" "
            src={phoneSVG}
            alt="phoneSVG"
          />
        </div>
        <div>
          <p className="text-my-p">888 456 7890</p>
        </div>
      </div>
      <Image
        className="absolute -left-60 -top-72"
        src={
          "https://assets-global.website-files.com/65b71fcb4e38b0b131977ef6/65b72034e6086fb0624a2e8a_Glow%20One.svg"
        }
        height={600}
        width={600}
        alt="bg-light"
      />
    </div>
  );
};

export default ContactInfo;
