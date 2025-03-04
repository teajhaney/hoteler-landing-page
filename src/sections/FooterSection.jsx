import React from "react";
import { AiOutlineCrown, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";
import {
  companies,
  footerServices,
  londonContacts,
  newYorkContacts,
  socials,
} from "../constant/constants.jsx";
const FooterSection = () => {
  return (
    <footer className="pt-24 pb-10 flex flex-col bg-secondary text-white">
      <div className="bodyContent mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  lg:gap-5 ">
        {/* first grid */}
        <div className="flex flex-col  gap-5">
          <div className="flex items-center gap-2">
            <AiOutlineCrown className="text-primary text-6xl" />
            <div className=" flex flex-col ">
              <h1 className="text-2xl tracking-widest font-times text-primary">
                HOTELER
              </h1>
              <h1 className="text-xs font-helvetica text-[#e4d6cb47] ">
                LUXURY HOTEL
              </h1>
            </div>
          </div>
          <h1 className="font-helvetica text-[#e4d6cb47] ">
            Feel free to reach out if you want collaborate with us, or simply
            chat.
          </h1>
          <div className="h-16 w-96 lg:w-72 bg-[#e4d6cb47] py-2 px-5 flex items-center justify-between">
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
        <div className="flex flex-col lg:ml-20 gap-3 ">
          <h1 className="font-times font-bold text-2xl tracking-widest">
            Services
          </h1>
          {footerServices.map((footerService) => (
            <h1
              key={footerService}
              className="font-helvetica text-[#e4d6cb47] underline-slide-hover cursor-pointer  hover:underline hover:decoration-1 hover:decoration-primary transition-colors duration-500 ease-in-out ">
              {footerService}
            </h1>
          ))}
        </div>
        {/* 3rd grid service1 */}
        <div className="flex flex-col lg:ml-20  gap-3">
          <h1 className="font-times font-bold text-2xl tracking-widest">
            Company
          </h1>
          {companies.map((company) => (
            <h1
              key={company}
              className="font-helvetica text-[#e4d6cb47] underline-slide-hover cursor-pointer hover:underline hover:decoration-1 hover:decoration-primary transition-colors duration-500 ease-in-out ">
              {company}
            </h1>
          ))}
        </div>
        {/* 4th grid */}
        <div className="flex flex-col lg:ml-20  gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="font-times font-bold text-2xl tracking-widest">
              New york
            </h1>
            {newYorkContacts.map((newYorkContact) => (
              <h1
                key={newYorkContact}
                className="font-helvetica text-[#e4d6cb47] underline-slide-hover cursor-pointer hover:underline hover:decoration-1 hover:decoration-primary transition-colors duration-500 ease-in-out ">
                {newYorkContact}
              </h1>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-times font-bold text-2xl tracking-widest">
              London
            </h1>
            {londonContacts.map((londonContact) => (
              <h1
                key={londonContact}
                className="font-helvetica text-[#e4d6cb47] underline-slide-hover cursor-pointer hover:underline hover:decoration-1 hover:decoration-primary transition-colors duration-500 ease-in-out ">
                {londonContact}
              </h1>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-[#e4d6cb47] border-0.1" />
      <div className="flex justify-center items-center gap-1">
        <AiOutlineCopyrightCircle />
        <h1 className="text-xl font-helveica">
          <span className="font-extralight text-[#e4d6cb47]">2025 </span>
          ThemeMascot
          <span className="font-extralight text-[#e4d6cb47]"> Agency</span>
        </h1>
      </div>
    </footer>
  );
};

export default FooterSection;
//[#e4d6cb47]
