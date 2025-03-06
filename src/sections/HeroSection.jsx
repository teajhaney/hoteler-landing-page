import React from "react";
import { heroImage } from "../constant/constants";
import {
  NavigationComponent,
  CheckAvailability,
  VisibleOnScrollNavbar,
} from "../components/exportComponent";
import { AiOutlineCrown, AiFillStar } from "react-icons/ai";
const HeroSection = () => {
  return (
    <section className="relative  h-150 md:h-180 lg:h-200 2xl:h-250  bg-center py-5 text-white">
      <img
        src={heroImage}
        alt="Hero"
        className="absolute z-0 inset-0 w-full h-full object-cover  animate-fadeInUp "
      />
      <AiOutlineCrown className=" absolute z-100  top-1/3 left-1/2 bottom-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[400px] opacity-5" />
      <div className="relative z-100">
        <NavigationComponent />
      </div>
      <div className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center animate-fadeInUp  ">
        <div className="flex gap-2 text-center text-2xl md:text-3xl">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h1 className="font-times text-[34px] sm:[text-40px] md:text-[70px]  lg:text-[80px] 2xl:text-[130px] whitespace-nowrap  ">
          Book Your Dream Hotel <br />
          With Hoteler
        </h1>
      </div>
      {/* <VisibleOnScrollNavbar/> */}
      <CheckAvailability />
    </section>
  );
};

export default HeroSection;
