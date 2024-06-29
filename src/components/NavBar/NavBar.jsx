"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsTelephoneOutbound } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import MobileNavBar from "./MobileNavBar";

const NavBar = ({ children, className, ...props }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={cn("z-[999] mx-auto max-w-screen-2xl px-5 py-5", className)}
        {...props}
      >
        {/* navbar for big screen */}
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image
              className=""
              src="/assets/images/Home other imgaes/logo.png"
              alt="logo.png"
              height={200}
              width={200}
            />
          </Link>
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-6 text-lg">
              <li className="group relative">
                <Link href="/" className="group flex items-center gap-2">
                  <span className="block">Home</span>
                  <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" />
                </Link>
                {/* <div className="absolute z-10 mt-0 hidden -translate-x-1/4 group-hover:block">
                  <ul className="mt-3 space-y-2 rounded bg-gray-800 p-5 text-white">
                    <li className="whitespace-nowrap">Home link-1</li>
                    <li className="whitespace-nowrap">Home link</li>
                    <li className="whitespace-nowrap">Home link</li>
                    <li className="whitespace-nowrap">Home link</li>
                  </ul>
                </div> */}
              </li>
              <li>
                <Link href="/about" className="group flex items-center gap-2">
                  <span className="block">About</span>
                  <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" />
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="group flex items-center gap-2">
                  <span className="block">Pages</span>
                  <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" />
                </Link>
              </li> */}
              <li>
                <Link href="/service" className="group flex items-center gap-2">
                  <span className="block">Services</span>
                  <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center gap-2">
                  <span className="block">Contact</span>
                  <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" />
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="group flex items-center gap-2"
                >
                  <span className="block">Portfolio</span>
                  <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" />
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="group flex items-center gap-2">
                  <span className="block">Blogs</span>
                  <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" />
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div className="hidden items-center gap-5 lg:flex">
            <div className="relative">
              <PiShoppingCartLight className="text-3xl font-semibold" />
              <p className="absolute -bottom-2 -right-2 rounded-full bg-indigo-500 p-[2px] px-1 text-center text-sm">
                10
              </p>
            </div>
            <div>|</div> */}
          {/* <div className="flex items-center gap-3">
              <div className="">
                <BsTelephoneOutbound className="text-2xl" />
              </div>
              <div className="">
                <p>Call anytime</p>
                <p>0123456789</p>
              </div>
            </div>
          </div> */}
          <div className="lg:hidden">
            {isMobileMenuOpen ? (
              <IoMdClose
                className="cursor-pointer text-3xl"
                onClick={toggleMobileMenu}
              />
            ) : (
              <HiOutlineMenu
                className="cursor-pointer text-3xl"
                onClick={toggleMobileMenu}
              />
            )}
          </div>
        </div>
      </div>
      {/* navbar for mobile view */}
      {isMobileMenuOpen && <MobileNavBar onClose={toggleMobileMenu} />}
    </>
  );
};

export default NavBar;
