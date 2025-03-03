import React from "react";
import {
  hotelAttribute,
  hotelAttribute2,
  hotelAttribute3,
  about1,
  about2,
  serviceBgImage,
} from "../constant/constants";

import { FaCircleCheck } from "react-icons/fa6";

const ServiceSection = () => {
  return (
    <div className="relative  mt-28 ">
      <img
        src={serviceBgImage}
        className="absolute bottom-0 right-0 -z-10"
        alt="service bg image"
      />
  
      <div className="bodyContent   grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="w-full  h-full flex flex-col items-start gap-5">
          <h1 className="font-helvetica tracking-wide text-primary iconImage">
            {" "}
            LUXURY HOTELER{" "}
          </h1>
          <h2 className="font-times text-4xl lg:text-5xl font-extralight">
            We Provide Outdoor <br /> Activities To All Visitors
          </h2>
          <h3 className="text-xl text-primary font-helvetica">
            {hotelAttribute}
          </h3>
          {hotelAttribute3.map((attribute) => (
            <div className="flex gap-10">
              <img src="https://html.kodesolution.com/2025/hoteler-html/images/icons/before.png" />
              <div className="text-xl font-times font-extralight">
                {attribute}
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-3">
            {hotelAttribute2.map((attribute) => (
              <div className="flex gap-5 ">
                <FaCircleCheck className="text-primary" />
                <p className="text-wrap font-helvetica font-extralight ">
                  {attribute}
                </p>
              </div>
            ))}
          </div>
          <div className="discover-slide-hover bg-primary h-16 w-60 flex justify-center items-center text-white">
            <h1 className="z-100 font-helvetica font-extralight text-xl ">
              DISCOVER MORE
            </h1>
          </div>
        </div>
        {/* overlapping image */}
        <div className=" relative  h-150 lg:h-full max-md:w-[400px] max-lg:w-[600px]">
          <div className="centerAbsolute absolute h-96 w-96 border-1 border-primary"></div>
          <div className="border-gray-200 border-8  absolute  h-96 w-80 left:0 top-0 lg:top-0 lg:right-0 transform duration-1000 ease-in-out">
            {" "}
            <img
              src={about1}
              alt="Hero"
              className="absolute z-0 inset-0 w-full h-full object-cover  animate-fadeInUp "
            />
          </div>
          <div className=" z-50 border-gray-200 border-8 absolute h-80 w-80 right-0 bottom-0 lg:bottom-0 lg:left-0 transform duration-1000 ease-in-out ">
            {" "}
            <img
              src={about2}
              alt="Hero"
              className="absolute z-0 inset-0 w-full h-full object-cover  animate-fadeInUp "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
