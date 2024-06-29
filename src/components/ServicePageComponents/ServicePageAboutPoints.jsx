import React from "react";
import { BsCheck2 } from "react-icons/bs";

const ServicePageAboutPoints = ({ children }) => {
  return (
    <div className="group flex items-center gap-6 rounded-md">
      <div className="max-w-fit cursor-pointer rounded-full bg-gray-500 bg-opacity-20 p-2 transition-all duration-300 hover:bg-indigo-500 hover:bg-opacity-100 group-hover:bg-indigo-500">
        <BsCheck2 className="text-xl text-white" />
      </div>
      <h3 className="text-xl font-semibold">{children}</h3>
    </div>
  );
};

export default ServicePageAboutPoints;
