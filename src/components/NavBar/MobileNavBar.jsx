import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const MobileNavBar = ({ onClose }) => {
  return (
    <div className="inset-x-0 top-20 z-50 flex transform animate-slide-down flex-col items-start bg-[#0C0F27] p-5 transition-transform duration-300 ease-in-out lg:hidden">
      <ul className="flex flex-col items-start gap-6 text-lg text-white">
        <li className="group relative">
          <Link
            href="/"
            className="group flex items-center gap-2"
            onClick={onClose}
          >
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
          <Link
            href="/about"
            className="group flex items-center gap-2"
            onClick={onClose}
          >
            <span className="block">About</span>
            <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" />
          </Link>
        </li>
        {/* <li>
          <Link
            href="#"
            className="group flex items-center gap-2"
            onClick={onClose}
          >
            <span className="block">Pages</span>
            <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" />
          </Link>
        </li> */}
        <li>
          <Link
            href="/service"
            className="group flex items-center gap-2"
            onClick={onClose}
          >
            <span className="block">Services</span>
            <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" />
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="group flex items-center gap-2"
            onClick={onClose}
          >
            <span className="block">Contact</span>
            <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" />
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2"
            onClick={onClose}
          >
            <span className="block">Portfolio</span>
            <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" />
          </Link>
        </li>
        {/* <li>
          <Link
            href="#"
            className="group flex items-center gap-2"
            onClick={onClose}
          >
            <span className="block">Blogs</span>
            <IoIosArrowDown className="transition-all duration-300 group-hover:rotate-180" />
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default MobileNavBar;
