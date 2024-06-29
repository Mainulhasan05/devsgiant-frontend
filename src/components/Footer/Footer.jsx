import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaBehance, FaRegCopyright, FaXTwitter } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Footer = ({ children, className, ...props }) => {
  return (
    <div className={cn("mx-auto pt-10 lg:pt-20 px-5 lg:px-10 bg-gray-900 bg-opacity-50", className)} {...props}>
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
          <div className="space-y-5 pb-5 lg:pb-10">
            <Link href={"/"} className="mb-10">
              <Image className="" src="/assets/images/Home other imgaes/logo.png" alt="logo.png" height={100} width={100} />
            </Link>

            <p className="lg:max-w-96">DevsGiant is your passionate team of tech experts, building innovative solutions across Web3 and traditional software development. We craft cutting-edge dApps, DeFi platforms, and tackle any software challenge with a full-stack mastery. Giant thinking meets agile execution, ensuring success for your project.</p>
            {/* <div>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p>012345689</p>
            </div> */}
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p>team@devsgiant.com</p>
            </div>
          </div>

          {/* <div className="space-y-5 pb-5 lg:pb-10">
            <h3 className="text-lg font-semibold mb-10">Get in touch</h3>
            <ul className="space-y-3">
              <li className="max-w-max cursor-pointer hover:text-blue-600 transition-all duration-300">
                <Link href="#">About</Link>
              </li>
              <li className="max-w-max cursor-pointer hover:text-blue-600 transition-all duration-300">
                <Link href="#">Lice</Link>nse
              </li>
              <li className="max-w-max cursor-pointer hover:text-blue-600 transition-all duration-300">
                <Link href="#">Serv</Link>ice
              </li>
              <li className="max-w-max cursor-pointer hover:text-blue-600 transition-all duration-300">
                <Link href="#">Proj</Link>ect
              </li>
              <li className="max-w-max cursor-pointer hover:text-blue-600 transition-all duration-300">
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div> */}

          <div className="space-y-5 pb-5 lg:pb-10">
            {/* <h3 className="text-lg font-semibold mb-10">Subscribe newsletter</h3>
            <div className="relative">
              <input type="email" name="newsLatter" id="newsLatter" placeholder="Enter your email" className="w-full bg-gray-200 bg-opacity-15 rounded-md outline-none border-none pr-10 pl-4 py-3" />
              <IoPaperPlaneOutline className="absolute top-4 right-3 text-xl hover:text-blue-600 transition-all duration-300 cursor-pointer" />
            </div> */}
            <p>Connect with Us</p>
            <div className="flex items-center gap-5">
              <Link href="#">
                <FaXTwitter className="text-xl  " />
              </Link>
              <Link href="#">
                <FaFacebookF className="text-xl  " />
              </Link>
              <Link href="#">
                <FaLinkedin className="text-xl  " />
              </Link>
            
            </div>
          </div>
        </div>
        <div className="mb-10 border-b w-full border-gray-300 "></div>
        <div className="pb-10 flex items-center justify-between">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <FaRegCopyright />
            <p>Copyright 2024 DevsGiant. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
