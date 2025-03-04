import React from "react";
import { AiOutlineCrown } from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";
import { socials } from "../constant/constants.jsx";
const FooterSection = () => {
  return (
    <footer className="pt-24 flex flex-col bg-secondary text-white">
      <div className="bodyContent grid-cols-1 md:grid-cols-2 lg:rid-cols-4 gap-5 md:gap-x-3 md:gap-y-5 lg:gap-5">
        {/* first grid */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <AiOutlineCrown className="text-primary text-6xl" />
            <div className=" flex flex-col ">
              <h1 className="text-2xl tracking-widest font-times text-primary">
                HOTELER
              </h1>
              <h1 className="text-xs font-helvetica text-[#e4d6cb47]">
                LUXURY HOTEL
              </h1>
            </div>
          </div>
          <div className="h-16 bg-[#e4d6cb47] py-2 px-5 flex items-center justify-between">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="text-[#e4d6cb47]"
            />
            <BsSendFill className="text-primary text-3xl" />
          </div>
          <h1 className="font-times font-bold text-2xl tracking-widest">
            Follow Us
          </h1>
          <div className="flex gap-3">{socials.map((social) => social)}</div>
        </div>
        {/* second grid service1 */}
        <div className="flex flex-col gap-5">
          <h1 className="font-times font-bold text-2xl tracking-widest">
            Services
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
//[#e4d6cb47]
